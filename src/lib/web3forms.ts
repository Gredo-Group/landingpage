export const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "d845e521-2b75-4321-bda3-e534347d7c9f";

export async function submitWeb3Form(payload: Record<string, string>) {
  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ access_key: WEB3FORMS_ACCESS_KEY, ...payload }),
  });

  const result = (await response.json()) as { success?: boolean; message?: string };

  if (!response.ok || !result.success) {
    throw new Error(result.message || "Unable to submit the form.");
  }
}
