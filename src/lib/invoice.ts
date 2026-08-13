export type InvoiceLineItem = {
  id: string;
  description: string;
  quantity: number;
  rate: number;
};

export type InvoiceData = {
  sender: string;
  senderDetails: string;
  client: string;
  clientDetails: string;
  invoiceNumber: string;
  issueDate: string;
  dueDate: string;
  taxRate: number;
  discount: number;
  notes: string;
  items: InvoiceLineItem[];
};

export function money(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(Number.isFinite(value) ? value : 0);
}

export function calculateInvoice(data: InvoiceData) {
  const subtotal = data.items.reduce(
    (sum, item) => sum + cleanNumber(item.quantity) * cleanNumber(item.rate),
    0,
  );
  const discount = Math.max(0, cleanNumber(data.discount));
  const taxable = Math.max(0, subtotal - discount);
  const tax = taxable * (Math.max(0, cleanNumber(data.taxRate)) / 100);
  const total = taxable + tax;

  return { subtotal, discount, taxable, tax, total };
}

export function cleanNumber(value: number) {
  return Number.isFinite(value) ? value : 0;
}

export function formatInvoiceText(data: InvoiceData) {
  const totals = calculateInvoice(data);
  return [
    `${data.sender || "Sender"} -> ${data.client || "Client"}`,
    `Invoice ${data.invoiceNumber || "INV-0001"}`,
    `Issued ${data.issueDate || "today"} / Due ${data.dueDate || "soon"}`,
    "",
    ...data.items.map(
      (item) =>
        `${item.description || "Line item"} x ${cleanNumber(item.quantity)} @ ${money(
          cleanNumber(item.rate),
        )}`,
    ),
    "",
    `Subtotal ${money(totals.subtotal)}`,
    `Discount ${money(totals.discount)}`,
    `Tax ${money(totals.tax)}`,
    `Total ${money(totals.total)}`,
  ].join("\n");
}
