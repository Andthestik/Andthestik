"""Simple transcript summarization utility."""
from __future__ import annotations

def summarize_transcript(transcript: str, max_sentences: int = 2) -> str:
    """Return the first ``max_sentences`` sentences of ``transcript``.

    This acts as a placeholder for an AI-powered summarizer.
    """
    sentences = [s.strip() for s in transcript.split('.') if s.strip()]
    summary = '. '.join(sentences[:max_sentences])
    if summary and not summary.endswith('.'):
        summary += '.'
    return summary

if __name__ == "__main__":
    sample = (
        "Video content can be long and dense. "
        "Creators often need a quick overview. "
        "This utility extracts a simple summary."
    )
    print(summarize_transcript(sample))
