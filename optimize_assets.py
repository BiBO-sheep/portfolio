"""
Converts all certificate PNGs and project PNGs to WebP and copies
certificate PDFs to public/certificates/ so they are NOT bundled
by Vite's asset pipeline.
"""
import os
import shutil
from PIL import Image

ROOT = r"c:\Users\Acer\portfolio"
CERT_SRC = os.path.join(ROOT, "src", "assets", "certificates")
CERT_DEST = os.path.join(ROOT, "public", "certificates")
ASSETS_SRC = os.path.join(ROOT, "src", "assets")
ASSETS_DEST = os.path.join(ROOT, "public", "images")

os.makedirs(CERT_DEST, exist_ok=True)
os.makedirs(ASSETS_DEST, exist_ok=True)

CERT_PNG_MAP = {
    "JavaScript_Essentials_1_certificate.png": "js1.webp",
    "JavaScript_Essentials_2_certificate.png": "js2.webp",
    "Sertifikat Belajar Dasar AI.png": "ai.webp",
    "Sertifikat Introduction to Financial Literacy.png": "finance.webp",
    "sertifikat haskell.png": "haskell.webp",
    "sertifikat memulai pemograman dengan c.png": "c.webp",
    "sertifikat memulai pemrograman dengan java.png": "java.webp",
}

CERT_PDF_MAP = {
    "JavaScript_Essentials_1_certificate.pdf": "js1.pdf",
    "JavaScript_Essentials_2_certificate.pdf": "js2.pdf",
    "Sertifikat Belajar Dasar AI.pdf": "ai.pdf",
    "Sertifikat Introduction to Financial Literacy.pdf": "finance.pdf",
    "sertifikat haskell.pdf": "haskell.pdf",
    "sertifikat memulai pemograman dengan c.pdf": "c.pdf",
    "sertifikat memulai pemrograman dengan java.pdf": "java.pdf",
}

print("--- Converting certificate PNGs → WebP ---")
for src_name, dest_name in CERT_PNG_MAP.items():
    src_path = os.path.join(CERT_SRC, src_name)
    dest_path = os.path.join(CERT_DEST, dest_name)
    img = Image.open(src_path)
    img.save(dest_path, "WEBP", quality=82, method=6)
    src_kb = os.path.getsize(src_path) // 1024
    dest_kb = os.path.getsize(dest_path) // 1024
    print(f"  {src_name}: {src_kb}KB → {dest_name}: {dest_kb}KB (saved {src_kb - dest_kb}KB)")

print("\n--- Copying certificate PDFs to public/certificates/ ---")
for src_name, dest_name in CERT_PDF_MAP.items():
    src_path = os.path.join(CERT_SRC, src_name)
    dest_path = os.path.join(CERT_DEST, dest_name)
    shutil.copy2(src_path, dest_path)
    print(f"  {src_name} → {dest_name}")

print("\n--- Converting project PNGs → WebP ---")
project_images = {
    "bixbo-store.png": "bixbo-store.webp",
    "klinik.png":      "klinik.webp",
}
for src_name, dest_name in project_images.items():
    src_path = os.path.join(ASSETS_SRC, src_name)
    dest_path = os.path.join(ASSETS_DEST, dest_name)
    img = Image.open(src_path)
    img.save(dest_path, "WEBP", quality=80, method=6)
    src_kb = os.path.getsize(src_path) // 1024
    dest_kb = os.path.getsize(dest_path) // 1024
    print(f"  {src_name}: {src_kb}KB → {dest_name}: {dest_kb}KB (saved {src_kb - dest_kb}KB)")

print("\n--- Converting profile images → WebP ---")
profile_images = {
    "profile.jpg": "profile.webp",
    "About.jpg":   "about.webp",
}
for src_name, dest_name in profile_images.items():
    src_path = os.path.join(ASSETS_SRC, src_name)
    dest_path = os.path.join(ASSETS_DEST, dest_name)
    img = Image.open(src_path)
    img.save(dest_path, "WEBP", quality=85, method=6)
    src_kb = os.path.getsize(src_path) // 1024
    dest_kb = os.path.getsize(dest_path) // 1024
    print(f"  {src_name}: {src_kb}KB → {dest_name}: {dest_kb}KB (saved {src_kb - dest_kb}KB)")

print("\nDone.")
