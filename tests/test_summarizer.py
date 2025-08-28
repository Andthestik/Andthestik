from mvp.summarizer import summarize_transcript

def test_summary_shorter_than_input():
    text = (
        "Sentence one. "
        "Sentence two. "
        "Sentence three."
    )
    summary = summarize_transcript(text, max_sentences=2)
    assert len(summary) < len(text)
    assert summary.count('.') == 2
