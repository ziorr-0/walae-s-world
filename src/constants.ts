export type Category = 'All' | 'Missing' | 'Cute' | 'Deep' | 'Funny' | 'Us' | 'Sweet' | 'Reassurance' | 'Intimate';

export interface CardData {
  id: number;
  title: string;
  category: Category;
  content?: string;
}

export const CARDS: CardData[] = [
  // --- EXISTING CARDS (0-99) ---
  
  // Missing You (0-9)
  { 
    id: 0, 
    title: "Tap me if you miss me", 
    category: "Missing",
    content: `Hey baby,

I know you tapped this because, somewhere deep down, you’re thinking about me and wishing I was right there with you. And I want you to know… I miss you too. Every single moment you’re not next to me, even if it’s just for a few minutes, I feel it. It’s not just a “I wish you were here” feeling, it’s the warm ache of wanting to see your face, to hear your laugh, to hold your hand.

Even when we just talked or saw each other, I still miss you. Because you’re not just someone I like… you’re my calm. You’re my happiness I didn’t know I needed. You’re the thought that sneaks into my head at random times, the smile that comes without reason, the warmth in my chest that I can’t control.

And if you’re missing me too, don’t ever feel silly. It doesn’t mean you’re needy. It doesn’t mean you’re overthinking. It just means you care. And caring is beautiful. And it’s exactly why I care about you so much. Because you’re special. Because you matter.

So, if you feel that little pang of longing, if you wish you could hug me or hear my voice or just know I’m thinking of you… remember this: I am. I’m always thinking of you. I’m always here, even if it’s in spirit for now. And every time you feel it, that’s just proof that what we have is real, soft, and meaningful.

You’re not alone, Walae. You’re never alone. And every time you tap this card, I want you to feel that. I’m missing you. I’m thinking about you. I’m here — always.

♡ Makram`
  },
  { 
    id: 1, 
    title: "Tap me if you’re thinking about me", 
    category: "Missing", 
    content: `So you’re thinking about me right now?

Let me tell you something first — I don’t just think about you sometimes. It’s not random. It’s not triggered by a color or a song or a moment. It’s constant. You live in my head in the calmest, softest way. I wake up and you’re there. I go through my day and you’re there. I try to focus on something else and somehow my mind circles back to you.

Not because I’m obsessed in a crazy way.
But because you matter to me in a peaceful way.

If you’re thinking about me right now, I want you to feel safe in that feeling. Don’t overanalyze it. Don’t question it. It just means we’re connected. And I love that we are.

Sometimes I catch myself smiling for no reason and then I realize it’s because I’m replaying something about you. The way you talk. The way you react. The way you calm me without even trying. You don’t leave my thoughts easily — and honestly? I don’t want you to.

And if you’re thinking about me because you miss me or because you’re wondering if I feel the same… yes. I do. Probably more than you think. You don’t have to guess where you stand with me. You don’t have to compete for space in my life. You already have it.

So if I’m on your mind right now, just know this —
you’re not alone in that.
You’re on mine too. Always.

Not sometimes.
Not randomly.
Always.

♡ Makram`
  },
  { 
    id: 2, 
    title: "Tap me if you want a hug", 
    category: "Missing", 
    content: `Come here.

If you tapped this, it means you need closeness. Not just a quick side hug. Not just something playful. You need the kind of hug that makes everything slow down for a second.

If I was there with you right now, I wouldn’t rush it. I’d open my arms and pull you in gently, one hand around you, the other resting softly on your back. I’d hold you close enough for you to feel safe, but not tight enough to ever make you feel trapped. Just… secure.

And I wouldn’t let go fast.

Because sometimes a hug isn’t about romance. It’s about reassurance. It’s about telling you without words: you’re not alone. You’re protected. You’re cared for. You matter.

If you want a hug because you’re tired, I’d hold you.
If you want a hug because you’re sad, I’d hold you longer.
If you want a hug for no reason at all, that’s even better.

Needing affection doesn’t make you weak. It doesn’t make you clingy. It makes you human. And I like that about you. I like that you feel things deeply instead of pretending you don’t.

And I want you to know something important — I will never make you feel like you’re asking for too much when you want comfort from me. If anything, it makes me happy that you look for it with me.

So close your eyes for a second and imagine this:

My arms around you.
My chin resting lightly near your head.
Everything quiet.
Just us.
No pressure.
No stress.
Just warmth.

That’s your hug.
And whenever you need it, I’m here.

♡ Makram`
  },
  { id: 3, title: "Tap me if you need me", category: "Missing", content: `If you tapped this, it means something inside you is reaching for me.

And I want you to read this slowly:
You never have to hesitate to need me.

Whether it’s something small or something heavy, whether you can explain it clearly or you’re just feeling overwhelmed and don’t even know why — I’m here. Not just when it’s easy. Not just when you’re in a good mood. I’m here when you’re confused, quiet, emotional, stressed, overthinking, or just not yourself.

Needing someone isn’t weakness. It’s trust. And if you’re choosing me in moments where you feel vulnerable, that means more to me than you realize.

If you need reassurance, I’ll give it.
If you need comfort, I’ll give it.
If you need space but still want me close, I’ll understand that too.

You don’t have to shrink your feelings to keep me around. You don’t have to pretend you’re okay just to look “strong.” I don’t want a perfect version of you. I want the real one — the one who feels deeply, who sometimes overthinks, who sometimes just wants to be held emotionally.

And if what you need right now is to know that I’m not going anywhere — then let me say it clearly: I’m not disappearing when things get complicated. I’m not pulling away because you had a hard day. I’m not stepping back because you felt too much.

If you need me, I’m right here. Not annoyed. Not tired of you. Not distant.

Just here.

Always willing to listen. Always willing to understand. Always willing to choose you again.

♡ Makram`
  },
  { id: 4, title: "Tap me if you can’t sleep", category: "Missing", content: `Hey baby…

If you’re reading this at night with your eyes half open and your mind still running, I wish I was there with you right now.

If you can’t sleep, it probably means your thoughts won’t quiet down. Maybe you’re replaying your day. Maybe you’re overthinking something small. Maybe you just miss me a little. Whatever it is, I need you to breathe slowly for a second.

Inhale… slowly.
Exhale… slowly.

If I was next to you, I’d pull you close, gently. Not even talking at first. Just letting you feel that you’re not alone in the dark. I’d brush my hand softly over your arm, slow and calm, until your breathing matches mine. I’d whisper that everything can wait until tomorrow. Nothing needs to be solved tonight.

You don’t have to fight your thoughts alone. And you definitely don’t have to pretend you’re strong when you’re tired. Nights make everything feel louder. But I promise you, whatever feels big right now will feel smaller in the morning.

If you can’t sleep because you miss me… I miss you too.
If you can’t sleep because you’re thinking about us… we’re okay.
If you can’t sleep because your heart feels heavy… I’m here to hold it with you.

I want you to feel safe when you close your eyes. Safe in us. Safe in knowing that someone genuinely cares about how you’re feeling at 2am. Someone who would rather stay up talking to you than let you feel alone.

So lay your head down slowly.
Imagine I’m right there.
Imagine my arm around you.
Imagine me whispering, “you’re okay, baby… I’ve got you.”

Now close your eyes.

Sleep peacefully.

I’m right here.

— Makram ♡` 
  },
  { id: 5, title: "Tap me if you feel lonely", category: "Missing", content: `If you tapped this, it means there’s a quiet feeling inside you right now. Maybe you’re surrounded by people but still feel alone. Maybe your thoughts feel louder than everything else. Maybe you just wish someone understood without you having to explain.

I want you to know something very clearly — you are not alone. Not emotionally. Not in this. Not with me.

Loneliness can be tricky. It doesn’t always mean no one is around. Sometimes it just means you don’t feel fully seen in that moment. And if that’s how you’re feeling, I need you to remember that there is someone who genuinely wants to see you. All of you. Not just the happy version. Not just the easy version. The real one.

If I was there right now, I wouldn’t try to fix everything immediately. I’d just sit with you. Close. Quiet if needed. I’d let you talk if you want to. Or I’d just hold your hand and let you feel that presence. Because sometimes what heals loneliness isn’t solutions — it’s connection.

And you have that with me.

Even if we’re not physically next to each other, you still have someone thinking about you. Caring about how your day went. Wondering if you ate. Hoping you’re okay. You’re not invisible. You’re not forgotten. You matter.

If your heart feels a little empty right now, let this fill a small part of it:
I’m here. I care. And I’m not going anywhere.

You don’t walk through anything alone anymore. Not while I’m around.

— Makram ♡` 
  },
  { id: 6, title: "Tap me if you want reassurance", category: "Reassurance", content: `If you tapped this, it means your heart is looking for certainty right now. Maybe a tiny doubt crossed your mind. Maybe you’re overthinking something small. Maybe you just need to hear it clearly instead of guessing.

So let me say it in the simplest way possible — I like you. I choose you. I’m here because I want to be.

You don’t have to compete for my attention. You don’t have to act perfect. You don’t have to tone yourself down so I stay. I’m not with you by accident. I’m with you because something about you feels right to me. Calm. Genuine. Different.

If you’re wondering whether I care as much as you do, I do. If you’re wondering whether I’m serious, I am. If you’re wondering whether I’ll leave when things get a little hard, I won’t. I’m not here for temporary feelings. I’m here because I see something real in you.

And if you needed reassurance about yourself — you are not too much. You’re not dramatic. You’re not hard to love. You’re just someone who feels deeply. And I actually admire that about you.

If I was next to you right now, I’d hold your face gently and tell you to stop doubting your place in my life. You have one. A real one. And it’s not fragile.

So breathe for a second. Relax your mind. Let the overthinking quiet down.

You’re wanted. You’re valued. You’re safe here.

And I’m not going anywhere.

— Makram ♡` 
  },
  { id: 7, title: "Tap me if you’re sad", category: "Missing", content: `If you tapped this, it means your heart feels a little heavier right now. Maybe something happened. Maybe nothing happened and you just feel off. Maybe you’re trying to stay strong but it’s harder than usual.

First, I need you to know this — it’s okay to be sad. You don’t have to hide it. You don’t have to act normal. You don’t have to shrink your feelings so they look easier to handle.

If I was there with you right now, I wouldn’t tell you to “just cheer up.” I’d sit next to you quietly. I’d let you lean on me. I’d listen to whatever you want to say, even if it doesn’t fully make sense. And if you didn’t want to talk at all, I’d still stay.

Your sadness doesn’t scare me away. It doesn’t make you less special. It doesn’t make you difficult. It just makes you human. And I care about you in every mood, not just the happy ones.

If your eyes feel heavy or your chest feels tight, breathe slowly for me. Inhale. Exhale. You’re not alone in this feeling. I’m right here, even if it’s just through a screen right now.

And whatever is making you sad, it doesn’t change how I see you. You’re still my favorite person. You’re still important. You’re still someone I choose.

Let yourself feel it. And when you’re ready, I’ll be here to help you smile again.

— Makram ♡` 
  },
  { id: 8, title: "Tap me if you’re smiling", category: "Sweet", content: `If you tapped this, it means your heart is happy right now, and I love that. Your smile is one of the most beautiful things in the world, and just thinking about it makes me feel warm inside. I want you to know that every time you smile, even for a second, it lights up my day too.

Your happiness matters to me more than words can say. I want to be the reason behind that smile, or at least a part of it. Even if nothing is perfect, even if life feels heavy sometimes, I hope you always find moments that make your heart feel light.

And if you’re smiling because of me… know that I notice. I see it. I feel it. It makes me feel like everything we’re building together is real, soft, and special. Your joy is my joy, your happiness is my calm, and your smile is my favorite sight.

So keep smiling, baby. Not because you have to, but because you want to. And whenever you do, remember that I’m smiling too — thinking about you, thinking about us, and feeling so lucky to have you in my life.

— Makram ♡` 
  },
  { id: 9, title: "Tap me if you want attention", category: "Cute", content: "Paste your content here..." },

  // Cute / Playful (10-19)
  { id: 10, title: "Tap me if you’re jealous", category: "Cute", content: "Paste your content here..." },
  { id: 11, title: "Tap me if you’re dramatic", category: "Funny", content: "Paste your content here..." },
  { id: 12, title: "Tap me if you’re mad at me", category: "Funny", content: "Paste your content here..." },
  { id: 13, title: "Tap me if you want kisses", category: "Cute", content: "Paste your content here..." },
  { id: 14, title: "Tap me if you want cuddles", category: "Cute", content: "Paste your content here..." },
  { id: 15, title: "Tap me if you’re bored", category: "Funny", content: "Paste your content here..." },
  { id: 16, title: "Tap me if you’re stalking me", category: "Funny", content: "Paste your content here..." },
  { id: 17, title: "Tap me if you’re obsessed", category: "Cute", content: "Paste your content here..." },
  { id: 18, title: "Tap me if you’re blushing", category: "Sweet", content: "Paste your content here..." },
  { id: 19, title: "Tap me if you’re shy", category: "Sweet", content: "Paste your content here..." },

  // Deep (20-29)
  { id: 20, title: "Read me when you overthink", category: "Deep", content: "Paste your content here..." },
  { id: 21, title: "Read me when you feel insecure", category: "Reassurance", content: "Paste your content here..." },
  { id: 22, title: "Read me when you doubt yourself", category: "Reassurance", content: "Paste your content here..." },
  { id: 23, title: "Read me when you feel unappreciated", category: "Reassurance", content: "Paste your content here..." },
  { id: 24, title: "Read me when the world feels heavy", category: "Deep", content: "Paste your content here..." },
  { id: 25, title: "Read me when you need strength", category: "Deep", content: "Paste your content here..." },
  { id: 26, title: "Read me when you feel not enough", category: "Reassurance", content: "Paste your content here..." },
  { id: 27, title: "Read me when you’re tired", category: "Deep", content: "Paste your content here..." },
  { id: 28, title: "Read me when you need peace", category: "Deep", content: "Paste your content here..." },
  { id: 29, title: "Read me when you need calm", category: "Deep", content: "Paste your content here..." },

  // Sweet (30-39)
  { id: 30, title: "Open me when you wake up", category: "Sweet", content: "Paste your content here..." },
  { id: 31, title: "Open me before you sleep", category: "Sweet", content: "Paste your content here..." },
  { id: 32, title: "Open me when you smile", category: "Sweet", content: "Paste your content here..." },
  { id: 33, title: "Open me when you laugh", category: "Sweet", content: "Paste your content here..." },
  { id: 34, title: "Open me when you cry", category: "Deep", content: "Paste your content here..." },
  { id: 35, title: "Open me when you feel proud", category: "Sweet", content: "Paste your content here..." },
  { id: 36, title: "Open me when you need warmth", category: "Deep", content: "Paste your content here..." },
  { id: 37, title: "Open me when you miss my voice", category: "Missing", content: "Paste your content here..." },
  { id: 38, title: "Open me when you feel loved", category: "Sweet", content: "Paste your content here..." },
  { id: 39, title: "Open me anytime", category: "Sweet", content: "Paste your content here..." },

  // Us (40-49)
  { id: 40, title: "Our first day ♡", category: "Us", content: "Paste your content here..." },
  { id: 41, title: "The way you look at me", category: "Us", content: "Paste your content here..." },
  { id: 42, title: "Why I chose you", category: "Us", content: "Paste your content here..." },
  { id: 43, title: "What I admire about you", category: "Us", content: "Paste your content here..." },
  { id: 44, title: "Your smile effect", category: "Us", content: "Paste your content here..." },
  { id: 45, title: "The basketball day", category: "Us", content: "Paste your content here..." },
  { id: 46, title: "The way you calm me", category: "Us", content: "Paste your content here..." },
  { id: 47, title: "What makes you different", category: "Us", content: "Paste your content here..." },
  { id: 48, title: "The soft side of you", category: "Us", content: "Paste your content here..." },
  { id: 49, title: "Why you’re special", category: "Us", content: "Paste your content here..." },

  // Fun / Cute Energy (50-59)
  { id: 50, title: "Warning: too cute", category: "Cute", content: "Paste your content here..." },
  { id: 51, title: "Dangerous level of beauty", category: "Cute", content: "Paste your content here..." },
  { id: 52, title: "Certified favorite person", category: "Cute", content: "Paste your content here..." },
  { id: 53, title: "Main character energy", category: "Funny", content: "Paste your content here..." },
  { id: 54, title: "Walae supremacy", category: "Funny", content: "Paste your content here..." },
  { id: 55, title: "Pink queen mode", category: "Cute", content: "Paste your content here..." },
  { id: 56, title: "My favorite notification", category: "Sweet", content: "Paste your content here..." },
  { id: 57, title: "Soft but powerful", category: "Sweet", content: "Paste your content here..." },
  { id: 58, title: "Official comfort person", category: "Sweet", content: "Paste your content here..." },
  { id: 59, title: "My peace", category: "Deep", content: "Paste your content here..." },

  // Emotional Layers (60-69)
  { id: 60, title: "When you feel overwhelmed", category: "Reassurance", content: "Paste your content here..." },
  { id: 61, title: "When you need reassurance", category: "Reassurance", content: "Paste your content here..." },
  { id: 62, title: "When you feel distant", category: "Deep", content: "Paste your content here..." },
  { id: 63, title: "When you overthink us", category: "Reassurance", content: "Paste your content here..." },
  { id: 64, title: "When you need clarity", category: "Deep", content: "Paste your content here..." },
  { id: 65, title: "When you doubt my feelings", category: "Reassurance", content: "Paste your content here..." },
  { id: 66, title: "When you need to breathe", category: "Deep", content: "Paste your content here..." },
  { id: 67, title: "When you feel small", category: "Reassurance", content: "Paste your content here..." },
  { id: 68, title: "When you feel misunderstood", category: "Deep", content: "Paste your content here..." },
  { id: 69, title: "When you just need me", category: "Missing", content: "Paste your content here..." },

  // Short & Minimal (70-79)
  { id: 70, title: "Just you ♡", category: "Sweet", content: "Paste your content here..." },
  { id: 71, title: "Always you", category: "Sweet", content: "Paste your content here..." },
  { id: 72, title: "Only you", category: "Sweet", content: "Paste your content here..." },
  { id: 73, title: "Still you", category: "Sweet", content: "Paste your content here..." },
  { id: 74, title: "Forever mood", category: "Sweet", content: "Paste your content here..." },
  { id: 75, title: "Pink thoughts", category: "Cute", content: "Paste your content here..." },
  { id: 76, title: "My heart", category: "Sweet", content: "Paste your content here..." },
  { id: 77, title: "My calm", category: "Deep", content: "Paste your content here..." },
  { id: 78, title: "My softness", category: "Deep", content: "Paste your content here..." },
  { id: 79, title: "My person", category: "Us", content: "Paste your content here..." },

  // Slightly Funny (80-89)
  { id: 80, title: "If you’re being stubborn", category: "Funny", content: "Paste your content here..." },
  { id: 81, title: "If you’re ignoring me", category: "Funny", content: "Paste your content here..." },
  { id: 82, title: "If you’re pretending not to care", category: "Funny", content: "Paste your content here..." },
  { id: 83, title: "If you’re acting tough", category: "Funny", content: "Paste your content here..." },
  { id: 84, title: "If you’re jealous but won’t say it", category: "Funny", content: "Paste your content here..." },
  { id: 85, title: "If you’re dramatic today", category: "Funny", content: "Paste your content here..." },
  { id: 86, title: "If you need princess treatment", category: "Cute", content: "Paste your content here..." },
  { id: 87, title: "If you want compliments", category: "Cute", content: "Paste your content here..." },
  { id: 88, title: "If you want attention x100", category: "Cute", content: "Paste your content here..." },
  { id: 89, title: "If you’re smiling right now", category: "Sweet", content: "Paste your content here..." },

  // Final Emotional Set (90-99)
  { id: 90, title: "For hard days", category: "Deep", content: "Paste your content here..." },
  { id: 91, title: "For soft days", category: "Sweet", content: "Paste your content here..." },
  { id: 92, title: "For silent days", category: "Deep", content: "Paste your content here..." },
  { id: 93, title: "For loud days", category: "Deep", content: "Paste your content here..." },
  { id: 94, title: "For every version of you", category: "Deep", content: "Paste your content here..." },
  { id: 95, title: "For the girl I adore", category: "Sweet", content: "Paste your content here..." },
  { id: 96, title: "For the girl I chose", category: "Us", content: "Paste your content here..." },
  { id: 97, title: "For my Walae", category: "Us", content: "Paste your content here..." },
  { id: 98, title: "For us", category: "Us", content: "Paste your content here..." },
  { id: 99, title: "Until infinity ♡", category: "Us", content: "Paste your content here..." },

  // --- NEW CARDS (100-199) ---

  // Soft Emotional (100-109)
  { id: 100, title: "When you feel quiet", category: "Deep", content: "Paste your content here..." },
  { id: 101, title: "When you feel distant", category: "Deep", content: "Paste your content here..." },
  { id: 102, title: "When your mind won’t stop", category: "Deep", content: "Paste your content here..." },
  { id: 103, title: "When you need a reminder", category: "Reassurance", content: "Paste your content here..." },
  { id: 104, title: "When you feel fragile", category: "Reassurance", content: "Paste your content here..." },
  { id: 105, title: "When you need comfort", category: "Reassurance", content: "Paste your content here..." },
  { id: 106, title: "When you miss my touch", category: "Missing", content: "Paste your content here..." },
  { id: 107, title: "When you feel sensitive", category: "Deep", content: "Paste your content here..." },
  { id: 108, title: "When your heart feels heavy", category: "Deep", content: "Paste your content here..." },
  { id: 109, title: "When you feel unsure", category: "Reassurance", content: "Paste your content here..." },

  // Romantic Energy (110-119)
  { id: 110, title: "Because you’re mine", category: "Sweet", content: "Paste your content here..." },
  { id: 111, title: "Because I chose you", category: "Us", content: "Paste your content here..." },
  { id: 112, title: "Because you matter", category: "Reassurance", content: "Paste your content here..." },
  { id: 113, title: "Because you’re rare", category: "Sweet", content: "Paste your content here..." },
  { id: 114, title: "Because you’re magic", category: "Sweet", content: "Paste your content here..." },
  { id: 115, title: "Because you’re different", category: "Sweet", content: "Paste your content here..." },
  { id: 116, title: "Because you glow", category: "Sweet", content: "Paste your content here..." },
  { id: 117, title: "Because you shine", category: "Sweet", content: "Paste your content here..." },
  { id: 118, title: "Because you’re unforgettable", category: "Sweet", content: "Paste your content here..." },
  { id: 119, title: "Because you’re you", category: "Sweet", content: "Paste your content here..." },

  // Reassurance Mode (120-129)
  { id: 120, title: "I’m not going anywhere", category: "Reassurance", content: "Paste your content here..." },
  { id: 121, title: "I still choose you", category: "Reassurance", content: "Paste your content here..." },
  { id: 122, title: "You’re safe with me", category: "Reassurance", content: "Paste your content here..." },
  { id: 123, title: "I care more than I show", category: "Deep", content: "Paste your content here..." },
  { id: 124, title: "I’m proud of you", category: "Reassurance", content: "Paste your content here..." },
  { id: 125, title: "You’re enough", category: "Reassurance", content: "Paste your content here..." },
  { id: 126, title: "I see you", category: "Reassurance", content: "Paste your content here..." },
  { id: 127, title: "I hear you", category: "Reassurance", content: "Paste your content here..." },
  { id: 128, title: "I understand you", category: "Reassurance", content: "Paste your content here..." },
  { id: 129, title: "I appreciate you", category: "Reassurance", content: "Paste your content here..." },

  // Soft Princess Mode (130-139)
  { id: 130, title: "For my pretty girl", category: "Cute", content: "Paste your content here..." },
  { id: 131, title: "For my soft girl", category: "Cute", content: "Paste your content here..." },
  { id: 132, title: "For my favorite human", category: "Cute", content: "Paste your content here..." },
  { id: 133, title: "For my comfort", category: "Deep", content: "Paste your content here..." },
  { id: 134, title: "For my calm", category: "Deep", content: "Paste your content here..." },
  { id: 135, title: "For my heart", category: "Sweet", content: "Paste your content here..." },
  { id: 136, title: "For my safe place", category: "Deep", content: "Paste your content here..." },
  { id: 137, title: "For my peace", category: "Deep", content: "Paste your content here..." },
  { id: 138, title: "For my smile", category: "Sweet", content: "Paste your content here..." },
  { id: 139, title: "For my world", category: "Us", content: "Paste your content here..." },

  // Playful (140-149)
  { id: 140, title: "If you’re being cute", category: "Cute", content: "Paste your content here..." },
  { id: 141, title: "If you’re pretending to be mad", category: "Funny", content: "Paste your content here..." },
  { id: 142, title: "If you want kisses x10", category: "Cute", content: "Paste your content here..." },
  { id: 143, title: "If you want cuddles x100", category: "Cute", content: "Paste your content here..." },
  { id: 144, title: "If you want drama", category: "Funny", content: "Paste your content here..." },
  { id: 145, title: "If you want chaos", category: "Funny", content: "Paste your content here..." },
  { id: 146, title: "If you want love", category: "Sweet", content: "Paste your content here..." },
  { id: 147, title: "If you want attention", category: "Cute", content: "Paste your content here..." },
  { id: 148, title: "If you want compliments", category: "Cute", content: "Paste your content here..." },
  { id: 149, title: "If you want me", category: "Intimate", content: "Paste your content here..." },

  // Deep Layer (150-159)
  { id: 150, title: "About us", category: "Us", content: "Paste your content here..." },
  { id: 151, title: "About trust", category: "Deep", content: "Paste your content here..." },
  { id: 152, title: "About loyalty", category: "Deep", content: "Paste your content here..." },
  { id: 153, title: "About patience", category: "Deep", content: "Paste your content here..." },
  { id: 154, title: "About timing", category: "Deep", content: "Paste your content here..." },
  { id: 155, title: "About growth", category: "Deep", content: "Paste your content here..." },
  { id: 156, title: "About future", category: "Us", content: "Paste your content here..." },
  { id: 157, title: "About forever", category: "Us", content: "Paste your content here..." },
  { id: 158, title: "About effort", category: "Deep", content: "Paste your content here..." },
  { id: 159, title: "About communication", category: "Deep", content: "Paste your content here..." },

  // Memory Style (160-169)
  { id: 160, title: "That first feeling", category: "Us", content: "Paste your content here..." },
  { id: 161, title: "That first smile", category: "Us", content: "Paste your content here..." },
  { id: 162, title: "That first laugh", category: "Us", content: "Paste your content here..." },
  { id: 163, title: "That first moment", category: "Us", content: "Paste your content here..." },
  { id: 164, title: "That first spark", category: "Us", content: "Paste your content here..." },
  { id: 165, title: "That first day", category: "Us", content: "Paste your content here..." },
  { id: 166, title: "That first message", category: "Us", content: "Paste your content here..." },
  { id: 167, title: "That first “hi”", category: "Us", content: "Paste your content here..." },
  { id: 168, title: "That first eye contact", category: "Us", content: "Paste your content here..." },
  { id: 169, title: "That first vibe", category: "Us", content: "Paste your content here..." },

  // Intimate Soft (170-179)
  { id: 170, title: "Close your eyes", category: "Intimate", content: "Paste your content here..." },
  { id: 171, title: "Imagine me there", category: "Intimate", content: "Paste your content here..." },
  { id: 172, title: "Breathe with me", category: "Intimate", content: "Paste your content here..." },
  { id: 173, title: "Hold my hand", category: "Intimate", content: "Paste your content here..." },
  { id: 174, title: "Lean on me", category: "Intimate", content: "Paste your content here..." },
  { id: 175, title: "Stay here", category: "Intimate", content: "Paste your content here..." },
  { id: 176, title: "Don’t overthink", category: "Reassurance", content: "Paste your content here..." },
  { id: 177, title: "It’s just us", category: "Intimate", content: "Paste your content here..." },
  { id: 178, title: "You and me", category: "Us", content: "Paste your content here..." },
  { id: 179, title: "Just breathe", category: "Reassurance", content: "Paste your content here..." },

  // Reassuring Calm (180-189)
  { id: 180, title: "Slow down", category: "Reassurance", content: "Paste your content here..." },
  { id: 181, title: "It’s okay", category: "Reassurance", content: "Paste your content here..." },
  { id: 182, title: "You’re safe", category: "Reassurance", content: "Paste your content here..." },
  { id: 183, title: "I’m here", category: "Reassurance", content: "Paste your content here..." },
  { id: 184, title: "Always here", category: "Reassurance", content: "Paste your content here..." },
  { id: 185, title: "I’ve got you", category: "Reassurance", content: "Paste your content here..." },
  { id: 186, title: "Don’t worry", category: "Reassurance", content: "Paste your content here..." },
  { id: 187, title: "You’re loved", category: "Reassurance", content: "Paste your content here..." },
  { id: 188, title: "You’re valued", category: "Reassurance", content: "Paste your content here..." },
  { id: 189, title: "You’re important", category: "Reassurance", content: "Paste your content here..." },

  // Final Emotional Tier (190-199)
  { id: 190, title: "My favorite feeling", category: "Sweet", content: "Paste your content here..." },
  { id: 191, title: "My favorite girl", category: "Sweet", content: "Paste your content here..." },
  { id: 192, title: "My soft spot", category: "Sweet", content: "Paste your content here..." },
  { id: 193, title: "My weakness", category: "Intimate", content: "Paste your content here..." },
  { id: 194, title: "My strength", category: "Deep", content: "Paste your content here..." },
  { id: 195, title: "My happiness", category: "Sweet", content: "Paste your content here..." },
  { id: 196, title: "My peace", category: "Deep", content: "Paste your content here..." },
  { id: 197, title: "My future", category: "Us", content: "Paste your content here..." },
  { id: 198, title: "My choice", category: "Us", content: "Paste your content here..." },
  { id: 199, title: "My Walae ♡", category: "Us", content: "Paste your content here..." },
];

export const CARD_TITLES = CARDS.map(c => c.title); // Backward compatibility if needed
