import os
# pyrefly: ignore [missing-import]
import pypdf

pdf_dir = r"c:\Users\Acer\portfolio\src\assets\certificates"
for f in os.listdir(pdf_dir):
    if f.endswith(".pdf"):
        print(f"--- {f} ---")
        try:
            reader = pypdf.PdfReader(os.path.join(pdf_dir, f))
            text = reader.pages[0].extract_text()
            print(text.strip())
        except Exception as e:
            print(f"Error: {e}")
        print("\n")
