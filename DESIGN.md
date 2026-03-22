# Design System Specification

## 1. Overview & Creative North Star: "The Architectural Authority"

This design system is built to transform the digital presence of Aeternum Talent Solutions into a space of "Architectural Authority." Rather than a standard corporate portal, the interface should feel like a high-end, bespoke consultancy office—solid, expansive, and meticulously curated.

**The Creative North Star: The Architectural Authority**
The system rejects the "box-within-a-box" web standard. Instead, it utilizes **Intentional Asymmetry** and **Tonal Depth** to guide the eye. We move away from rigid, thin-lined grids toward a layout that feels "built" through layered materials. The goal is to convey stability (Deep Navy) and elite success (Metallic Gold) through a sophisticated, editorial lens.

---

## 2. Color Theory & Surface Strategy

Our palette is rooted in the `primary` (#00113a) and `primary_container` (#002366). The Metallic Gold is represented by the `secondary` and `tertiary` tokens, used sparingly to signify "The Golden Thread" of talent and opportunity.

### The "No-Line" Rule

**Strict Mandate:** Designers are prohibited from using 1px solid borders to define sections. Content blocks must be separated through:

1. **Background Color Shifts:** Transitioning from `surface` (#faf8ff) to `surface_container_low` (#f4f3f9).
2. **Ample Spacing:** Using the `16` (5.5rem) or `20` (7rem) spacing tokens to create mental resets.
3. **Tonal Transitions:** Moving from `primary_container` to `primary` to create a sense of deep, recessed space.

### Surface Hierarchy & Nesting

Treat the UI as a physical desk of fine materials.

- **Base:** The `surface` or `surface_dim` acts as the floor.
- **Plinth:** A `surface_container` area holds the main content.
- **Featured Elements:** Use `surface_container_lowest` (#ffffff) for high-priority cards to make them appear as though they are rising toward the light.

### Signature Textures (Glass & Gradient)

To move beyond a flat "template" look, primary CTAs and Hero sections should utilize a **Linear Gradient** transition:

- _From_ `primary` (#00113a) _to_ `primary_container` (#002366) at a 135-degree angle.
- **Glassmorphism:** For floating navigation or modal overlays, use `surface_container_lowest` at 80% opacity with a `backdrop-blur` of 20px. This ensures the brand’s deep navy depth is never lost, only diffused.

---

## 3. Typography: The Editorial Voice

We utilize a high-contrast scale to create an editorial feel, juxtaposing the structural weight of **Manrope** with the functional clarity of **Inter**.

- **Display & Headlines (Manrope):** These are our "Architectural Beams." Use `display-lg` (3.5rem) for hero statements with tight letter-spacing (-0.02em) to convey maximum confidence and authority.
- **Body & Labels (Inter):** These are our "Functional Details." Using `body-lg` (1rem) for general prose ensures high readability. The `label-md` and `label-sm` tokens should be set in Uppercase with +0.05em tracking when used for metadata or category tags to maintain a premium feel.

**The Hierarchy Rule:** Never use more than two levels of typography within a single visual cluster. Contrast should be achieved through scale (Display vs. Body) rather than just weight.

---

## 4. Elevation & Depth: Tonal Layering

Traditional shadows are often "dirty" and "dated." This system uses light and material density to show hierarchy.

- **The Layering Principle:** Depth is achieved by stacking. A `surface_container_highest` card sitting on a `surface` background creates a natural, soft-touch lift.
- **Ambient Shadows:** If a floating element (like a primary modal) requires a shadow, it must use the `on_surface` color at 4% opacity with a blur of 60px. It should look like a soft glow of shadow, not a hard drop.
- **The "Ghost Border" Fallback:** In rare cases where a border is required (e.g., input fields), use `outline_variant` (#c5c6d2) at 20% opacity. **Never use 100% opaque borders.**
- **Corner Radius:** We utilize a "Corporate-Soft" radius. Use `md` (0.375rem) for standard components and `xl` (0.75rem) for large containers to soften the heavy corporate colors.

---

## 5. Components

### Buttons (The "Jewel" Elements)

- **Primary:** Background: `secondary` (#735c00) to `secondary_container` (#fed65b) gradient. Text: `on_secondary` (#ffffff). Shape: `md` (0.375rem).
- **Secondary:** Ghost style. Background: Transparent. Border: Ghost Border (20% `outline`). Text: `primary`.
- **Tertiary:** Text-only with a 2px underline using `secondary_fixed_dim`.

### Cards & Content Modules

- **Constraint:** Zero dividers. Use vertical white space `spacing-8` (2.75rem) to separate content groups.
- **Structure:** Use a `surface_container_low` background with a `surface_container_lowest` hover state to create "interaction lift."

### Input Fields

- **Style:** Minimalist. Background: `surface_container_high`. No bottom border—only a subtle `outline_variant` at 10% opacity.
- **Focus State:** The border transitions to `secondary` (Metallic Gold) at 100% opacity to signal "Value."

### Signature Component: The "Talent Spotlight" Card

A vertically elongated card using `primary` background. Top-aligned imagery should use an asymmetrical mask (one corner at `xl`, others at `none`). Text within uses `on_primary` for maximum contrast.

---

## 6. Do’s and Don’ts

### Do:

- **Use Asymmetry:** Place high-quality imagery off-center to create a modern, high-end magazine feel.
- **Embrace Whitespace:** If a section feels crowded, double the spacing token. Professionalism is found in the "gaps."
- **Use Tonal Shifts:** Define the footer not with a line, but by switching the entire background to `primary`.

### Don’t:

- **Don't use 1px dividers.** This is the quickest way to make the design feel "cheap" or "templated."
- **Don't use pure black.** Always use `on_surface` (#1a1b20) or `primary` (#00113a) for text to maintain the rich navy undertone.
- **Don't over-use Gold.** The Metallic Gold (`secondary`) is a highlighter for success. If everything is gold, nothing is premium. Use it only for CTAs, focus states, and key accents.
