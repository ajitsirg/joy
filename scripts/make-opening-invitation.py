from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parents[1]
ASSETS = Path(r"C:\Users\lenovo\.cursor\projects\c-Users-lenovo-Desktop-JoyWebsite-JoyClub\assets")
WORK = ROOT / "public" / "media" / "_opening-invitation"
W, H = 1080, 1920

photos = [
    ASSETS / "c__Users_lenovo_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_WhatsApp_Image_2026-09-02_at_3.19.26_PM__1_-485bf487-d7dc-4cc0-aa4f-6cc4a44f5647.png",
    ASSETS / "c__Users_lenovo_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_WhatsApp_Image_2026-09-02_at_3.19.26_PM__2_-f404eb6c-f496-48d8-ae12-d8a1021bae70.png",
    ASSETS / "c__Users_lenovo_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_WhatsApp_Image_2026-09-02_at_3.19.27_PM__1_-d110d8b8-6dfd-48d3-a446-2de7e306a288.png",
    ASSETS / "c__Users_lenovo_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_WhatsApp_Image_2026-09-02_at_3.19.25_PM__1_-2127c1b9-f94b-497b-b8a4-e6cb3002f55c.png",
    ASSETS / "c__Users_lenovo_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_WhatsApp_Image_2026-09-02_at_3.19.27_PM-e1711aa5-1266-4bca-8132-66080946a49d.png",
    ASSETS / "c__Users_lenovo_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_WhatsApp_Image_2026-09-02_at_3.19.26_PM-d4210e42-7fb1-4289-8d18-ee9dfeddac82.png",
    ASSETS / "c__Users_lenovo_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_WhatsApp_Image_2026-09-02_at_3.19.25_PM-71246954-950a-4a28-8c7e-6545f9658b68.png",
]

GREEN = (12, 54, 39)
GOLD = (211, 172, 93)
CREAM = (255, 249, 235)

def get_font(size, bold=False, italic=False):
    names = []
    if bold and italic:
        names.append("georgiaz.ttf")
    elif bold:
        names.append("georgiab.ttf")
    elif italic:
        names.append("georgiai.ttf")
    names += ["georgia.ttf", "arial.ttf"]
    for name in names:
        path = Path("C:/Windows/Fonts") / name
        if path.exists():
            return ImageFont.truetype(path, size)
    return ImageFont.load_default()

def wrap(draw, text, font, width):
    words, lines, line = text.replace("\\n", " ").split(), [], ""
    for word in words:
        proposal = f"{line} {word}".strip()
        if draw.textbbox((0, 0), proposal, font=font)[2] <= width:
            line = proposal
        else:
            lines.append(line)
            line = word
    if line:
        lines.append(line)
    return lines

def cover(image):
    image = image.convert("RGB")
    scale = max(W / image.width, H / image.height)
    image = image.resize((int(image.width * scale), int(image.height * scale)), Image.Resampling.LANCZOS)
    left, top = (image.width - W) // 2, (image.height - H) // 2
    return image.crop((left, top, left + W, top + H))

def draw_center(draw, text, y, font, fill, max_width=900, leading=16):
    lines = wrap(draw, text, font, max_width)
    for line in lines:
        box = draw.textbbox((0, 0), line, font=font)
        draw.text(((W - (box[2] - box[0])) // 2, y), line, font=font, fill=fill)
        y += (box[3] - box[1]) + leading
    return y

def slide(index, title, kicker, body="", use_photo=True):
    if use_photo:
        base = cover(Image.open(photos[index % len(photos)]))
        blurred = base.filter(ImageFilter.GaussianBlur(18))
        canvas = Image.blend(blurred, base, 0.35)
        overlay = Image.new("RGBA", (W, H), (*GREEN, 200))
        canvas = Image.alpha_composite(canvas.convert("RGBA"), overlay).convert("RGB")
    else:
        canvas = Image.new("RGB", (W, H), GREEN)

    draw = ImageDraw.Draw(canvas)
    draw.rectangle((65, 65, W - 65, H - 65), outline=GOLD, width=3)
    draw.line((150, 250, W - 150, 250), fill=GOLD, width=2)
    draw.line((150, H - 250, W - 150, H - 250), fill=GOLD, width=2)

    draw_center(draw, kicker.upper(), 165, get_font(30, bold=True), GOLD, leading=10)
    y = draw_center(draw, title, 450, get_font(92, bold=True), CREAM, max_width=850, leading=20)
    if body:
        draw_center(draw, body, y + 70, get_font(40), (239, 229, 199), max_width=800, leading=18)

    draw_center(draw, "JOY HOSPITALITY & REAL ESTATE GROUP", H - 195, get_font(25, bold=True), GOLD, max_width=850, leading=8)
    return canvas

def main():
    WORK.mkdir(parents=True, exist_ok=True)
    slides = [
        slide(0, "A NEW JOURNEY\\nBEGINS", "Grand Welcome & Opening Ceremony", "Tradition meets Technology", True),
        slide(1, "JOY HOSPITALITY\\n& REAL ESTATE GROUP", "You are invited", "Celebrating a new chapter in hospitality, real estate, growth and new opportunities.", True),
        slide(2, "SUNDAY\\n13 SEPTEMBER 2026", "Save the date", "4:00 PM onwards", True),
        slide(3, "CONSTITUTION CLUB\\nOF RAJASTHAN", "Join us in Jaipur", "8/11, Satya Vihar, Vidhayak Nagar, Lalkothi, Jaipur, Rajasthan – 302015", True),
        slide(4, "YOUR PRESENCE\\nWILL MAKE IT SPECIAL", "With warm regards", "We look forward to welcoming you and celebrating this memorable beginning together.", True),
        slide(5, "YOU ARE CORDIALLY\\nINVITED", "Building Experiences. Creating Value.", "www.joyclubs.in  ·  9261200844", True),
    ]
    for i, image in enumerate(slides, 1):
        image.save(WORK / f"slide-{i:02d}.jpg", quality=94)

if __name__ == "__main__":
    main()
