/**
 * Single lead-capture endpoint for the whole site.
 *
 * Every form (QuoteModal, InlineAuditForm, footer newsletter) posts here.
 * Payloads should include a distinguishing `formType` and/or `_subject`
 * field so submissions can be triaged in the shared Formspree inbox.
 * If the form ID ever rotates, change it in this one place.
 */
export const FORMSPREE_ENDPOINT = "https://formspree.io/f/mgvndqbr";

export async function submitLead(payload: Record<string, unknown>): Promise<void> {
  const response = await fetch(FORMSPREE_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!response.ok) {
    throw new Error(`Form submission failed (${response.status})`);
  }
}
