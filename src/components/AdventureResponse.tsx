"use client";

import { type FormEvent, useState } from "react";

export function AdventureResponse() {
  const [response, setResponse] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmedResponse = response.trim();
    if (!trimmedResponse || status === "sending") return;
    setStatus("sending");
    try {
      const result = await fetch("/api/adventure-response", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ response: trimmedResponse, website: "" }),
      });
      if (!result.ok) throw new Error("Response could not be sent.");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className={`adventure-response adventure-response-${status}`}>
      {status === "success" ? <p aria-live="polite">here&apos;s to more adventures :)</p> : <form onSubmit={submit}>
        <label htmlFor="adventure-response">tell me...</label>
        <textarea id="adventure-response" name="response" value={response} onChange={(event) => setResponse(event.target.value)} placeholder="tell me..." maxLength={1000} required disabled={status === "sending"} />
        <div className="adventure-response-actions"><span aria-live="polite">{status === "sending" ? "sending..." : status === "error" ? "that didn't send — try again?" : ""}</span><button type="submit" disabled={status === "sending" || !response.trim()} aria-label="Send response"><i aria-hidden="true">↗</i><b>send</b></button></div>
      </form>}
    </div>
  );
}
