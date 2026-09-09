from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
MEDIA = ROOT / "public" / "media"
WORK = ROOT / "public" / "media" / "_filmwork"
OUT = MEDIA / "hero" / "joy-film.mp4"
W, H = 1920, 1080

PHOTOS = [
    MEDIA / "rooms" / "lake-aerial.jpg",
    MEDIA / "rooms" / "garden-facing.jpg",
    MEDIA / "rooms" / "lake-cottage.jpg",
    MEDIA / "rooms" / "farmhouse.jpg",
    MEDIA / "rooms" / "adventure-tents.png",
    MEDIA / "gallery" / "g01.jpg",
    MEDIA / "gallery" / "g02.jpg",
    MEDIA / "gallery" / "g06.jpg",
    MEDIA / "gallery" / "g07.jpg",
    MEDIA / "resort" / "restaurant.jpg",
    MEDIA / "games" / "zipline.jpg",
    MEDIA / "games" / "boating.jpg",
    MEDIA / "games" / "atv.jpg",
    MEDIA / "events" / "holi-1.jpg",
]


def font(size: int, bold: bool = False):
    candidates = [
        "C:/Windows/Fonts/georgia.ttf",
        "C:/Windows/Fonts/georgiab.ttf" if bold else "C:/Windows/Fonts/georgia.ttf",
        "C:/Windows/Fonts/times.ttf",
        "C:/Windows/Fonts/arial.ttf",
    ]
    if bold:
        candidates.insert(0, "C:/Windows/Fonts/georgiab.ttf")
    for path in candidates:
        if Path(path).exists():
            return ImageFont.truetype(path, size)
    return ImageFont.load_default()


def card(lines: list[tuple[str, int, str, bool]], filename: str):
    img = Image.new("RGB", (W, H), (10, 41, 28))
    draw = ImageDraw.Draw(img)
    draw.rectangle((80, 80, W - 80, H - 80), outline=(207, 163, 83), width=3)
    y = 340
    for text, size, color, is_bold in lines:
        f = font(size, is_bold)
        box = draw.textbbox((0, 0), text, font=f)
        x = (W - (box[2] - box[0])) // 2
        draw.text((x, y), text, fill=color, font=f)
        y += size + 28
    dest = WORK / filename
    img.save(dest, quality=95)
    return dest


def fit_photo(src: Path, dest: Path):
    img = Image.open(src).convert("RGB")
    src_w, src_h = img.size
    scale = max(W / src_w, H / src_h)
    resized = img.resize((max(1, int(src_w * scale)), max(1, int(src_h * scale))), Image.Resampling.LANCZOS)
    left = (resized.width - W) // 2
    top = (resized.height - H) // 2
    cropped = resized.crop((left, top, left + W, top + H))
    cropped.save(dest, quality=92)


def main():
    WORK.mkdir(parents=True, exist_ok=True)
    card(
        [
            ("JOY ADVENTURE RESORT", 78, (255, 248, 236), True),
            ("Sanskriti Village, Jaipur", 36, (207, 163, 83), False),
            ("Lake cottages  ·  Games  ·  Farm stays", 28, (232, 214, 176), False),
        ],
        "title.jpg",
    )
    card(
        [
            ("Come stay.", 86, (255, 248, 236), True),
            ("+91 800 0928 080", 40, (207, 163, 83), False),
            ("info@joyadventureresort.com", 28, (232, 214, 176), False),
        ],
        "end.jpg",
    )
    for index, photo in enumerate(PHOTOS, start=1):
        if photo.exists():
            fit_photo(photo, WORK / f"still-{index:02d}.jpg")


if __name__ == "__main__":
    main()
