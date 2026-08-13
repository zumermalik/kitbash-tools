"use client";

import { useEffect, useMemo, useState } from "react";
import {
  calculateInvoice,
  formatInvoiceText,
  money,
  type InvoiceData,
  type InvoiceLineItem,
} from "@/lib/invoice";

const today = new Date().toISOString().slice(0, 10);

const initialInvoice: InvoiceData = {
  sender: "Kitbash Studio",
  senderDetails: "12 Paper Yard\nDesign District\nhello@kitbash.tools",
  client: "Northline Goods",
  clientDetails: "88 Market Street\nAccounts Payable",
  invoiceNumber: "KB-0007",
  issueDate: today,
  dueDate: "2026-09-14",
  taxRate: 8,
  discount: 75,
  notes: "Payment due by bank transfer. Thank you for building useful things.",
  items: [
    {
      id: "1",
      description: "Visual identity workshop",
      quantity: 1,
      rate: 900,
    },
    {
      id: "2",
      description: "Invoice template system",
      quantity: 1,
      rate: 520,
    },
  ],
};

export function TypewriterInvoiceTool() {
  const [invoice, setInvoice] = useState<InvoiceData>(initialInvoice);
  const [typedText, setTypedText] = useState(formatInvoiceText(initialInvoice));
  const [isTyping, setIsTyping] = useState(false);
  const totals = useMemo(() => calculateInvoice(invoice), [invoice]);
  const fullText = useMemo(() => formatInvoiceText(invoice), [invoice]);

  useEffect(() => {
    if (!isTyping) {
      setTypedText(fullText);
    }
  }, [fullText, isTyping]);

  function updateField<Key extends keyof InvoiceData>(
    key: Key,
    value: InvoiceData[Key],
  ) {
    setInvoice((current) => ({ ...current, [key]: value }));
  }

  function updateItem(
    id: string,
    key: keyof InvoiceLineItem,
    value: string | number,
  ) {
    setInvoice((current) => ({
      ...current,
      items: current.items.map((item) =>
        item.id === id ? { ...item, [key]: value } : item,
      ),
    }));
  }

  function addItem() {
    setInvoice((current) => ({
      ...current,
      items: [
        ...current.items,
        {
          id: crypto.randomUUID(),
          description: "New line item",
          quantity: 1,
          rate: 100,
        },
      ],
    }));
  }

  function removeItem(id: string) {
    setInvoice((current) => ({
      ...current,
      items:
        current.items.length === 1
          ? current.items
          : current.items.filter((item) => item.id !== id),
    }));
  }

  function replayTypewriter() {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      setTypedText(fullText);
      return;
    }

    setIsTyping(true);
    setTypedText("");
    let index = 0;
    const timer = window.setInterval(() => {
      index += 3;
      setTypedText(fullText.slice(0, index));
      if (index >= fullText.length) {
        window.clearInterval(timer);
        setIsTyping(false);
      }
    }, 18);
  }

  return (
    <section className="tool-workspace">
      <div className="panel print-hide">
        <div className="field-grid">
          <div className="two-col field-grid">
            <label className="field">
              <span>Sender</span>
              <input
                value={invoice.sender}
                onChange={(event) => updateField("sender", event.target.value)}
              />
            </label>
            <label className="field">
              <span>Client</span>
              <input
                value={invoice.client}
                onChange={(event) => updateField("client", event.target.value)}
              />
            </label>
          </div>
          <div className="two-col field-grid">
            <label className="field">
              <span>Sender details</span>
              <textarea
                value={invoice.senderDetails}
                onChange={(event) =>
                  updateField("senderDetails", event.target.value)
                }
              />
            </label>
            <label className="field">
              <span>Client details</span>
              <textarea
                value={invoice.clientDetails}
                onChange={(event) =>
                  updateField("clientDetails", event.target.value)
                }
              />
            </label>
          </div>
          <div className="two-col field-grid">
            <label className="field">
              <span>Invoice number</span>
              <input
                value={invoice.invoiceNumber}
                onChange={(event) =>
                  updateField("invoiceNumber", event.target.value)
                }
              />
            </label>
            <label className="field">
              <span>Issue date</span>
              <input
                type="date"
                value={invoice.issueDate}
                onChange={(event) =>
                  updateField("issueDate", event.target.value)
                }
              />
            </label>
            <label className="field">
              <span>Due date</span>
              <input
                type="date"
                value={invoice.dueDate}
                onChange={(event) => updateField("dueDate", event.target.value)}
              />
            </label>
            <label className="field">
              <span>Tax %</span>
              <input
                type="number"
                min="0"
                value={invoice.taxRate}
                onChange={(event) =>
                  updateField("taxRate", Number(event.target.value))
                }
              />
            </label>
          </div>

          <div className="control-group">
            <p className="eyebrow">Line items</p>
            {invoice.items.map((item) => (
              <div className="line-item" key={item.id}>
                <label className="field">
                  <span>Description</span>
                  <input
                    value={item.description}
                    onChange={(event) =>
                      updateItem(item.id, "description", event.target.value)
                    }
                  />
                </label>
                <label className="field">
                  <span>Qty</span>
                  <input
                    type="number"
                    min="0"
                    value={item.quantity}
                    onChange={(event) =>
                      updateItem(item.id, "quantity", Number(event.target.value))
                    }
                  />
                </label>
                <label className="field">
                  <span>Rate</span>
                  <input
                    type="number"
                    min="0"
                    value={item.rate}
                    onChange={(event) =>
                      updateItem(item.id, "rate", Number(event.target.value))
                    }
                  />
                </label>
                <button
                  className="icon-button"
                  type="button"
                  onClick={() => removeItem(item.id)}
                  aria-label={`Remove ${item.description}`}
                >
                  x
                </button>
              </div>
            ))}
            <button className="ghost-button" type="button" onClick={addItem}>
              Add line item
            </button>
          </div>

          <div className="two-col field-grid">
            <label className="field">
              <span>Discount</span>
              <input
                type="number"
                min="0"
                value={invoice.discount}
                onChange={(event) =>
                  updateField("discount", Number(event.target.value))
                }
              />
            </label>
            <label className="field">
              <span>Notes</span>
              <textarea
                value={invoice.notes}
                onChange={(event) => updateField("notes", event.target.value)}
              />
            </label>
          </div>

          <div className="action-row">
            <button className="button" type="button" onClick={replayTypewriter}>
              Generate replay
            </button>
            <button
              className="ghost-button"
              type="button"
              onClick={() => window.print()}
            >
              Print / Save PDF
            </button>
          </div>
        </div>
      </div>

      <div className="output-block">
        <InvoicePreview invoice={invoice} totals={totals} typedText={typedText} />
      </div>
    </section>
  );
}

function InvoicePreview({
  invoice,
  totals,
  typedText,
}: {
  invoice: InvoiceData;
  totals: ReturnType<typeof calculateInvoice>;
  typedText: string;
}) {
  return (
    <article className="invoice-paper" aria-label="Invoice preview">
      <div className="invoice-top">
        <div>
          <div className="invoice-title">Invoice</div>
          <div className="invoice-body">
            {invoice.invoiceNumber}
            {"\n"}Issued {invoice.issueDate}
            {"\n"}Due {invoice.dueDate}
          </div>
        </div>
        <div className="invoice-body">
          <strong>{invoice.sender}</strong>
          {"\n"}
          {invoice.senderDetails}
        </div>
      </div>

      <div className="invoice-body" style={{ marginTop: 28 }}>
        <strong>Bill to</strong>
        {"\n"}
        {invoice.client}
        {"\n"}
        {invoice.clientDetails}
      </div>

      <table className="invoice-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Qty</th>
            <th>Rate</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {invoice.items.map((item) => (
            <tr key={item.id}>
              <td>{item.description}</td>
              <td>{item.quantity}</td>
              <td>{money(item.rate)}</td>
              <td>{money(item.quantity * item.rate)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="totals">
        <div>
          <span>Subtotal</span>
          <span>{money(totals.subtotal)}</span>
        </div>
        <div>
          <span>Discount</span>
          <span>{money(totals.discount)}</span>
        </div>
        <div>
          <span>Tax</span>
          <span>{money(totals.tax)}</span>
        </div>
        <div>
          <strong>Total</strong>
          <strong>{money(totals.total)}</strong>
        </div>
      </div>

      <div className="invoice-body" style={{ marginTop: 34 }}>
        <strong>Typed record</strong>
        {"\n"}
        {typedText}
        {"\n\n"}
        <strong>Notes</strong>
        {"\n"}
        {invoice.notes}
      </div>
    </article>
  );
}
