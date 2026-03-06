export type Category = 'All' | 'Missing' | 'Cute' | 'Deep' | 'Funny' | 'Us' | 'Sweet' | 'Reassurance' | 'Intimate';

export interface CardData {
  id: number;
  title: string;
  category: Category;
  content?: string;
  image?: string;
}

export interface Memory {
  id: number;
  image?: string;
  date?: string;
  note?: string;
  isEmpty: boolean;
}

export const MEMORIES: Memory[] = [
  {
    id: 1,
    image: "https://majorelle-centreaffaires.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-05-at-10.12.57.jpeg",
    date: "March 2, 2026",
    note: "Our very first memory together 🥹♡\nThe day everything started.",
    isEmpty: false
  },
  {
    id: 2,
    image: "https://majorelle-centreaffaires.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-05-at-09.30.53.jpeg",
    date: "March 2, 2026",
    note: "Unforgettable moments.\nJust you and me. ✨",
    isEmpty: false
  },
  { id: 3, isEmpty: true, note: "Our next memory goes here ♡" },
  { id: 4, isEmpty: true, note: "Our next memory goes here ♡" },
  { id: 5, isEmpty: true, note: "Our next memory goes here ♡" },
  { id: 6, isEmpty: true, note: "Our next memory goes here ♡" },
  { id: 7, isEmpty: true, note: "Our next memory goes here ♡" },
  { id: 8, isEmpty: true, note: "Our next memory goes here ♡" },
  { id: 9, isEmpty: true, note: "Our next memory goes here ♡" },
  { id: 10, isEmpty: true, note: "Our next memory goes here ♡" },
  { id: 11, isEmpty: true, note: "Our next memory goes here ♡" },
  { id: 12, isEmpty: true, note: "Our next memory goes here ♡" },
];

export interface HerPhoto {
  id: number;
  url: string;
  note: string;
  isFavorite?: boolean;
}

export const HER_PHOTOS: HerPhoto[] = [
  { id: 1, url: "https://majorelle-centreaffaires.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-04-at-00.17.00-3.jpeg", note: "Just looking at you makes my day better. 🌸" },
  { id: 2, url: "https://majorelle-centreaffaires.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-04-at-00.17.00-2.jpeg", note: "Your smile is literally the prettiest thing I've ever seen. ✨" },
  { id: 3, url: "https://majorelle-centreaffaires.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-04-at-00.17.00-1.jpeg", note: "Effortlessly beautiful. How do you do it? 💖" },
  { id: 4, url: "https://majorelle-centreaffaires.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-04-at-00.17.00.jpeg", note: "A masterpiece. Truly. 🎨" },
  { id: 5, url: "https://majorelle-centreaffaires.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-04-at-00.17.01.jpeg", note: "You have this glow that lights up everything. 🌟" },
  { id: 6, url: "https://majorelle-centreaffaires.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-04-at-00.17.02-1.jpeg", note: "My heart skips a beat every time I see this face. 💓" },
  { id: 7, url: "https://majorelle-centreaffaires.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-04-at-00.17.02.jpeg", note: "Simply stunning. No other words. 😍" },
  { id: 8, url: "https://majorelle-centreaffaires.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-04-at-00.17.03-1.jpeg", note: "You are art. Pure and simple. 🖼️" },
  { id: 9, url: "https://majorelle-centreaffaires.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-04-at-00.17.03.jpeg", note: "I could stare at you forever and never get bored. 👀♡" },
  { id: 10, url: "https://majorelle-centreaffaires.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-04-at-00.17.04-3.jpeg", note: "The kind of beauty that makes people stop and stare. 🌹" },
  { id: 11, url: "https://majorelle-centreaffaires.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-04-at-00.17.04-2.jpeg", note: "You're glowing here. Absolutely radiant. ✨" },
  { id: 12, url: "https://majorelle-centreaffaires.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-04-at-00.17.04-1.jpeg", note: "My favorite view in the entire world. 🌍" },
  { id: 13, url: "https://majorelle-centreaffaires.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-04-at-00.17.04.jpeg", note: "Perfection exists, and it's you. 💯" },
  { id: 14, url: "https://majorelle-centreaffaires.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-04-at-00.16.41.jpeg", note: "So precious. I want to protect this smile forever. 🛡️♡" },
  { id: 15, url: "https://majorelle-centreaffaires.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-04-at-00.16.46.jpeg", note: "This one... this is my absolute favorite. You look like an angel here. 👼💖", isFavorite: true },
  { id: 16, url: "https://majorelle-centreaffaires.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-04-at-00.16.49.jpeg", note: "Captivating. That's what you are. 💫" },
  { id: 17, url: "https://majorelle-centreaffaires.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-04-at-00.16.50-1.jpeg", note: "Every angle is your best angle. 📸" },
  { id: 18, url: "https://majorelle-centreaffaires.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-04-at-00.16.50.jpeg", note: "Natural beauty at its finest. 🌿" },
  { id: 19, url: "https://majorelle-centreaffaires.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-04-at-00.16.54.jpeg", note: "You have the kindest eyes. 👁️♡" },
  { id: 20, url: "https://majorelle-centreaffaires.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-04-at-00.17.00-5.jpeg", note: "Just wow. I'm so lucky. 🍀" },
  { id: 21, url: "https://majorelle-centreaffaires.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-04-at-00.17.00-4.jpeg", note: "The definition of gorgeous. 📖✨" },
];

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
  { id: 9, title: "Tap me if you want attention", category: "Cute", content: `If you tapped this, it probably means you want a little extra attention right now… and honestly, I’m really glad you came here for it.

Because giving you attention isn’t something I see as a chore or something annoying. It’s actually something I enjoy. When you want my attention, it just means you want to feel close to me, noticed by me, and cared for by me — and that’s something I’ll always be happy to give you.

So yes, right now, this moment is for you.

Imagine me looking at you with that small smile, the one that says I’m fully paying attention to you. No distractions, no rushing, just you being the center of my focus for a second. Because when you matter to someone, giving you attention should feel natural.

Maybe you tapped this because you wanted me to notice you. Maybe you wanted a little affection. Maybe you just wanted to feel important for a moment.

Well… you are.

You’re someone I like talking to. Someone I like thinking about. Someone whose messages I actually look forward to. And when you want my attention, you already have it — you don’t even have to try hard to get it.

If I was there with you right now, I’d probably tease you a little and say, “ohh so someone wants attention today,” but then I’d still give it to you anyway. A little smile, a little closeness, a little reminder that you’re not invisible to me.

So here it is: my attention, fully yours for this moment.

And if you wanted a little extra affection too… you deserve that as well.

— Makram ♡` 
  },

  // Cute / Playful (10-19)
  { id: 10, title: "Tap me if you’re jealous", category: "Cute", content: `If you tapped this, it probably means something made your heart feel a little uneasy. Maybe you saw something, maybe you imagined something, maybe a small moment made you wonder if you should feel worried. And the first thing I want you to know is this: your feelings are valid. Feeling jealous sometimes doesn’t make you crazy, dramatic, or difficult. It just means you care, and when you care about someone, your heart wants to protect what it values.

But I also want to reassure you gently — you don’t have to compete for my attention, my affection, or my place in your life. You already have it. I’m with you because I want to be with you. Not because of convenience, not because of boredom, and definitely not because I’m looking somewhere else.

And if something I did made you feel jealous, even if I didn’t realize it at the moment, I’m genuinely sorry. Your feelings matter to me. The last thing I would ever want is for you to feel like you’re not enough or like you’re second to anyone. You’re not. Not even close.

The truth is, when I look at you, I see someone special. Someone who makes me calm. Someone who makes my day better just by being there. Someone I actually want in my life. And when you’re important to me like that, there’s no reason for me to look anywhere else.

So if that little jealous feeling showed up in your heart today, let me replace it with something softer: reassurance. You’re not being replaced. You’re not losing me. You’re not less than anyone. You’re the person I’m choosing to be close to, to talk to, to care about.

If I was there with you right now, I’d probably smile a little, pull you closer, and tell you quietly that you don’t have to worry like that. Because you’re already the one who has my attention.

And I’m not going anywhere.

— Makram ♡` 
  },
  { id: 11, title: "Tap me if you’re dramatic", category: "Funny", content: `If you tapped this, it probably means you’re being a little dramatic right now… and honestly? That’s kind of cute.

I can already imagine you with that little expression, maybe acting a bit extra, maybe making a big deal out of something small, maybe pretending the world is ending for a moment. And instead of being annoyed, it just makes me smile. Because that’s part of you. Your personality, your emotions, your way of feeling things strongly.

And I wouldn’t want you to hide that around me.

Being dramatic doesn’t make you “too much.” It just means you care deeply and you express it fully. Some people try to act cold or unbothered all the time, but you’re real with your emotions. And honestly? That’s something I actually like about you.

If you’re dramatic because you want attention… come here. You have it.
If you’re dramatic because you’re teasing me… okay fine, I deserve it a little.
If you’re dramatic because you want me to reassure you… I’ll gladly do it.

Because at the end of the day, your little dramatic moments just remind me that you’re human, expressive, and full of life. And I’d rather have someone who feels things loudly than someone who pretends they don’t care.

So go ahead, be dramatic for a minute. I’ll just be here smiling at you, shaking my head a little, but secretly thinking how adorable you are when you act like that.

And if what you really wanted from tapping this card was a little extra love… well, you just got it.

— Makram ♡` 
  },
  { id: 12, title: "Tap me if you’re mad at me", category: "Funny", content: `If you tapped this, it probably means you’re upset with me right now… and first, I just want to say I’m really sorry if I did something that hurt you, annoyed you, or made you feel bad in any way.

Your feelings matter to me more than being “right.” So if something I said or did made your heart feel heavy, I truly wish I could go back and fix that moment. The last thing I ever want is to be the reason you feel upset.

I know sometimes I might say things the wrong way, react the wrong way, or not realize something affected you. But that doesn’t mean I don’t care. If anything, it just means I still have things to learn about how to treat you even better — and I want to learn them.

If I was next to you right now, I probably wouldn’t argue or try to defend myself first. I’d just look at you, pull you a little closer, and say “okay… tell me what I did.” Because understanding you matters more to me than winning a small moment.

And even if you’re mad at me right now, I hope you know something important: you being upset doesn’t make me want to leave or pull away. It just makes me want to fix things and make you smile again.

Your anger doesn’t scare me. It just shows that what we have matters to you. And honestly, I’d rather you tell me when something bothers you than keep it inside.

So if you’re mad right now… come here for a second. Breathe. Let me apologize properly. Let me make it right. Because I care about you too much to leave things broken between us.

And I promise, even when we have little moments like this, I’m still choosing you.

— Makram ♡` 
  },
  { id: 13, title: "Tap me if you want kisses", category: "Cute", content: `If you tapped this, it probably means you want kisses right now… and honestly that makes me smile a lot.

Because when you want my kisses, it reminds me of how much I love being close to you. And the truth is… it’s not just you wanting kisses. I’m always craving yours too.

Your kisses aren’t just normal kisses to me. They’re the kind that stay on my mind after we’re apart. The kind that make my heart feel calm and excited at the same time. Sometimes I even catch myself thinking about them randomly and smiling like an idiot.

So if you tapped this, imagine this moment with me.

You’re close to me, I look at you for a second with that little smile, and I pull you gently closer. Not rushing anything, just enjoying the moment with you. And then I give you a soft kiss… the kind that says more than words ever could.

Because kissing you isn’t just something I do. It’s something I want. Something I miss when you’re not there. Something I’ll probably always crave.

And honestly… if you were here right now, I’d probably steal a few extra kisses too, just because I can.

So yes, if you came here looking for kisses, you deserve them.

And don’t forget something important…

your kisses are my favorite.

— Makram ♡` 
  },
  { id: 14, title: "Tap me if you want cuddles", category: "Cute", content: `If you tapped this, it probably means you want cuddles right now… and honestly that’s one of the cutest things ever.

Because cuddling you is one of those little things that feels so simple but means so much to me. Being close to you, feeling you next to me, just holding you and knowing you’re there… that’s the kind of moment I could stay in forever.

If I was with you right now, I’d probably pull you closer without even saying anything at first. Just wrapping my arms around you and letting you rest against me. No rush, no pressure, just warmth and comfort. The kind of hug where you can relax and feel safe.

Sometimes cuddles say things words don’t need to say. They say “I’m here.” They say “you’re safe with me.” They say “you don’t have to face anything alone.”

And with you, I’d hold you a little tighter than usual… not because I have to, but because I want to. Because having you in my arms is one of those feelings that makes everything else feel quiet for a moment.

So if you tapped this because you wanted cuddles, imagine me right there with you, holding you close, letting you relax against me while I gently remind you that you’re cared for.

And honestly… cuddling you is something I’d always want too.

— Makram ♡` 
  },
  { id: 15, title: "Tap me if you’re bored", category: "Funny", content: `If you tapped this, it probably means you’re feeling a little bored right now… and honestly, I love that you came here for a moment with me.

Because even when nothing exciting is happening, just thinking about you or sharing a little time with you makes everything better. Boredom is just a quiet way for us to find little moments together, even if it’s through messages or small gestures.

If I was with you right now, I’d probably tease you a little for being bored, make a silly face, and then do something just to make you laugh — maybe tickle you a little, maybe pull you closer, maybe just start talking about something random to make your day brighter.

Bored moments with you aren’t boring to me. They’re a chance to be together, to smile, to play, to feel close in a way that only we can. And honestly… even when you’re bored, I’d still be thinking about you and wishing I could make you feel happy in that moment.

So if you tapped this because you needed a little fun or just someone to focus on you, here I am. All for you. Ready to turn this quiet boredom into a little moment just for us.

— Makram ♡` 
  },
  { id: 16, title: "Tap me if you’re stalking me", category: "Funny", content: `If you tapped this, it probably means you’re thinking about me… or maybe you were secretly stalking me again. And honestly? I love that you do.

Because let’s be real — before we even started talking, we were both already keeping tabs on each other for almost a month. You know exactly what I mean. I’d be on the court, playing basketball, focused, and then I’d catch a little glance from somewhere, and I’d think, “oh… there she is.” And yes, sometimes I’d try to act like I didn’t notice, but of course I did.

And don’t even get me started on me. I was just as guilty. Every move you made, every person you talked to, every little thing you did — I noticed it. Not because I wanted to scare you or anything, but because… well, I couldn’t help it. You were impossible not to notice. Every little thing about you felt like it mattered, and maybe I wanted to know it all before we even spoke.

I remember the day we finally actually started talking. And honestly, it was kind of perfect, because by that point, we already knew each other in a weird little way, even without saying a word. And looking back, it’s hilarious — two people secretly watching each other, acting casual, but both low-key curious, both soft-hearted, both wondering… who’s going to make the first move?

So yeah… if you tapped this because you’re thinking about me, or because you were remembering those little “stalking” days… I see you. And I love you for it. For being curious about me, for caring enough to notice everything, for being someone who doesn’t just float through life — you pay attention, and it’s one of the things I actually adore about you.

And the funny part? I was doing the exact same thing. Every little thing you did, every step, every smile, every word… I noticed it. And that’s what made the start of all this so… us. Two people quietly noticing each other, before anything even happened.

So if you’re here, tapping this, maybe smiling at how ridiculous we were… don’t. Because honestly, I wouldn’t change a thing. I’d do it all over again, noticing you in every little way, learning every part of what makes you… you.

And now that we’re together, yeah, I might still notice little things about you sometimes. Not in a bad way, not in a creepy way — in a loving, soft, “wow she’s mine” kind of way. And maybe you do the same with me. And honestly… that’s kind of perfect. That’s us.

So tap this card, and let it remind you: your little secret glances didn’t scare me. They made me curious. They made me notice you more. And they made me fall for you even before we even said a word.

— Makram ♡` 
  },
  { id: 17, title: "Tap me if you’re obsessed", category: "Cute", content: `If you tapped this, it probably means you’re feeling a little obsessed… or maybe just thinking about me too much right now. And honestly? That’s kind of perfect, because I’m even more obsessed with you than you could imagine.

I think about you constantly — not just sometimes, not just when I see you, but all the little random moments too. The way you smile, the way you laugh, the little things you do without realizing it… I catch them in my mind over and over, like I’m trying to memorize every detail about you.

Sometimes I even find myself replaying moments we had, imagining new moments, and wondering what you’re doing right now. Are you thinking about me? Are you smiling? Are you feeling loved? Because if you’re not… I probably need to fix that immediately.

Being obsessed with you isn’t a problem for me. It’s the best thing ever. Because it means my heart can’t stop noticing you, my mind keeps you close even when we’re apart, and my soul feels alive just knowing you exist in my life.

If I was there with you right now, I’d probably hold you close, whisper some silly little things to make you laugh, and kiss you enough times that you’d roll your eyes but secretly love it. Because honestly… every moment with you is addictive. Every touch, every word, every look — I just can’t get enough.

And the best part? You’re not just someone I notice. You’re someone I choose over and over again. Every day. Every moment. Every heartbeat. Obsessed isn’t even the word — it’s like my entire world revolves around how much I love you and how much I want to be with you.

So if you tapped this because you feel obsessed too, or just can’t stop thinking about me… know that I’m feeling the same, but probably ten times worse. And honestly? I wouldn’t want it any other way.

You’re mine. I’m yours. And we’re perfectly, ridiculously obsessed with each other.

— Makram ♡` 
  },
  { id: 18, title: "Tap me if you’re blushing", category: "Sweet", content: `If you tapped this, I can already picture it.
  
Your cheeks turning that soft shade of pink, maybe you’re looking away, maybe you’re trying to hide a smile, or maybe you’re just feeling that warm rush because of something I said. And honestly? It’s the most beautiful thing I can imagine.

When you blush, it’s like seeing your heart on your face. It’s honest. It’s soft. It’s you being vulnerable in the sweetest way possible. And knowing that I’m the reason for it? That makes me feel like I’m doing something right.

If I was there, I wouldn’t let you hide it. I’d probably tilt your chin up, look right into your eyes, and make you blush even more just because I love seeing it. I love knowing that I affect you like that.

So don’t try to stop it. Let yourself feel it. Because that little glow on your face? It’s my favorite color on you.

— Makram ♡` },
  { id: 19, title: "Tap me if you’re shy", category: "Sweet", content: `You? Shy? Honestly, it’s one of the cutest things about you.

I know you have a strong side, a funny side, a confident side… but this shy side? It’s special. It’s the part of you that feels things deeply, the part that gets a little quiet when emotions get big. And I adore it.

There’s something so intimate about you being shy with me. It reminds me that what we have is real, that it still gives you butterflies, that it still matters. You don’t have to be bold all the time. You don’t have to always know what to say.

If you’re feeling shy right now, just know that you’re safe with me. You can be quiet. You can hide your face in my shoulder. You can just breathe. I’m not judging you; I’m just admiring you.

So stay shy for a minute. It suits you. And honestly, it just makes me want to hold you closer.

— Makram ♡` },

  // Deep (20-29)
  { id: 20, title: "Read me when you overthink", category: "Deep", content: `Stop. Breathe. Listen to me.

I know your mind is racing right now. I know you’re creating scenarios that haven’t happened, worrying about things that don’t exist, and questioning things that are actually solid. I know it feels loud in your head.

But I need you to trust me more than you trust your fears right now.

We are okay. You are okay.
I am not leaving. I am not angry. I am not hiding anything.
You don’t have to solve everything in your head. You don’t have to protect yourself from me.

Overthinking tries to convince you that you’re unsafe, but look at the reality: I’m here. I chose you. I’m still choosing you.

So take a deep breath. Let the thoughts pass like clouds. You don’t have to chase them. Just come back to me. Come back to us. We’re good.

— Makram ♡` },
  { id: 21, title: "Read me when you feel insecure", category: "Reassurance", content: `I hate that you feel this way, but I’m glad you came here. Listen to me closely.

Insecurity lies to you. It tells you that you’re not enough, that you’re replaceable, that you need to be perfect to be loved. But that’s not true. Not with me.

I don’t love you because you’re perfect. I love you because you’re you. I love the way you laugh, the way you care, the way you try, and even the way you worry. You bring a light into my life that no one else can.

You don’t have to compete for my heart. You already won it.
You don’t have to earn my affection. It’s freely yours.

So whenever that little voice in your head says you’re not enough, tell it to shut up because I said otherwise. You are everything I want.

— Makram ♡` },
  { id: 22, title: "Read me when you doubt yourself", category: "Reassurance", content: `If you could see yourself through my eyes, you would never doubt yourself again.

You see your flaws; I see your uniqueness.
You see your mistakes; I see your growth.
You see your weakness; I see your incredible strength.

You are capable. You are brilliant. You are kind. You have a heart that is rare in this world. Don’t let a bad moment or a hard day make you forget who you are.

I believe in you. Even when you don’t believe in yourself, I’m here holding that belief for you until you’re ready to take it back. You’ve got this. And I’ve got you.

— Makram ♡` },
  { id: 23, title: "Read me when you feel unappreciated", category: "Reassurance", content: `If I haven’t said it enough lately, let me say it now: I appreciate you.

I appreciate the big things you do, but I also appreciate the small things. The way you check on me. The way you listen. The effort you put into us. The way you just exist and make my life better.

I know sometimes life gets busy and I might forget to say it, but never think for a second that I don’t notice. I see you. I value you. And I am so incredibly lucky to have you.

Thank you for being you. Thank you for being mine.

— Makram ♡` },
  { id: 24, title: "Read me when the world feels heavy", category: "Deep", content: `I know it feels like a lot right now. I know you’re carrying things you don’t always talk about. I know you’re trying to be strong for everyone else.

But here, with me, you can put the weight down.

You don’t have to carry the world today. You just have to breathe. It’s okay to be tired. It’s okay to feel overwhelmed. You’re human, and you’re doing your best.

I wish I could take the weight off your shoulders physically, but for now, let me hold your heart. Lean on me. Let me be your rest. You don’t have to do this alone.

— Makram ♡` },
  { id: 25, title: "Read me when you need strength", category: "Deep", content: `You are stronger than you think.

Look at everything you’ve been through. Look at all the days you thought you couldn’t handle, and yet here you are. You’ve survived 100% of your bad days. You’ve grown through things that were meant to break you.

You have a fire inside you, Walae. Sometimes it burns low, but it never goes out.

Draw from that fire. Stand tall. You are a queen, and queens don’t crumble—they conquer. And remember, even the strongest warriors need a partner. I’m right here beside you, fighting with you.

— Makram ♡` },
  { id: 26, title: "Read me when you feel not enough", category: "Reassurance", content: `Enough? You are overflowing.

You are overflowing with kindness, with beauty, with spirit, with love. The idea that you could ever be "not enough" is laughable to me because, to me, you are almost too much good for this world.

You are enough just as you are. Not the version of you that achieves things. Not the version of you that looks perfect. Just you. The you that wakes up messy. The you that gets tired. The you that tries.

That version is the one I love. That version is more than enough.

— Makram ♡` },
  { id: 27, title: "Read me when you’re tired", category: "Deep", content: `Not just sleepy tired, but soul tired. I know that feeling.

When everything feels draining and you just want to curl up and hide. It’s okay to feel that way. It’s your body and soul asking for rest.

So give yourself permission to stop. You don’t have to be productive right now. You don’t have to answer anyone. You just have to exist.

Imagine me wrapping you in the warmest, softest blanket. Imagine the world going quiet. Just rest, my love. The world will still be there when you wake up.

— Makram ♡` },
  { id: 28, title: "Read me when you need peace", category: "Deep", content: `Close your eyes.

Imagine us. Somewhere quiet. Maybe a beach at sunset, maybe a cabin in the snow, maybe just lying in bed with the rain outside.

No phones. No noise. No expectations.
Just the sound of our breathing. My hand in yours. The feeling of absolute safety.

That peace exists. It’s right here between us. Whenever the noise gets too loud, come back to this thought. Come back to me. I am your peace.

— Makram ♡` },
  { id: 29, title: "Read me when you need calm", category: "Deep", content: `Inhale.
Hold.
Exhale.

I’ve got you. Nothing can hurt you here. Whatever is stressing you out is temporary. Whatever is worrying you is smaller than it seems.

Focus on my voice (or these words). Focus on the fact that you are loved deeply. Focus on the fact that you are safe.

Let the tension drop from your shoulders. Unclench your jaw. Soften your eyes.
You’re okay. We’re okay. Just breathe.

— Makram ♡` },

  // Sweet (30-39)
  { id: 30, title: "Open me when you wake up", category: "Sweet", content: `Good morning, beautiful.

I hope you slept well. I hope your dreams were sweet. And I hope the first thing you realized when you woke up is that you are so incredibly loved.

The world is lucky to have you in it for another day. And I’m even luckier to call you mine.
Go conquer the day, or just survive it—whatever you have the energy for. I’m proud of you either way.

Sending you a morning kiss. Mwah.

— Makram ♡` },
  { id: 31, title: "Open me before you sleep", category: "Sweet", content: `Before you close your eyes, I want to be the last thing on your mind.

Put down the worries of the day. They don’t belong in your bed.
Think about us. Think about my arms around you. Think about how safe you are.

You did good today. Now it’s time to recharge.
Sleep tight, my love. I’ll meet you in your dreams.

— Makram ♡` },
  { id: 32, title: "Open me when you smile", category: "Sweet", content: `I hope I caused this. But even if I didn’t, I’m just happy you’re smiling.

Your smile is literally sunshine. It changes the whole vibe of a room. It makes me feel lighter just imagining it.
Never let anyone take that smile away from you. It’s too precious.

Keep shining, baby.

— Makram ♡` },
  { id: 33, title: "Open me when you laugh", category: "Sweet", content: `That sound is my favorite melody.

I wish I could hear it right now. I wish I could bottle it up and play it whenever I’m having a bad day.
Your laugh is pure joy. It’s infectious. It’s proof that life is good.

Laugh more. It suits you. And honestly, I’ll do anything just to hear it again.

— Makram ♡` },
  { id: 34, title: "Open me when you cry", category: "Deep", content: `I wish I could wipe those tears away myself. But since I can’t, let my words hold you.

It’s okay to cry. It cleanses the soul. Let it out.
You don’t have to be strong right now. You can be soft. You can be hurt.

Just know that for every tear that falls, I’m sending you a thousand hugs. You are not crying alone. I’m with you in spirit, holding your hand through the storm.

This will pass. But while it’s here, I’ve got you.

— Makram ♡` },
  { id: 35, title: "Open me when you feel proud", category: "Sweet", content: `I knew you could do it.

I never doubted you for a second. You are capable of amazing things, and seeing you recognize your own worth makes me so incredibly happy.
Celebrate this moment. You earned it.

I’m cheering the loudest for you, always.

— Makram ♡` },
  { id: 36, title: "Open me when you need warmth", category: "Deep", content: `Imagine a blanket, hot cocoa, and my arms around you.
Imagine a fireplace crackling.
Imagine the smell of rain outside but being perfectly dry and warm inside.

That’s the feeling I want to give you.
You are safe. You are held. You are warm.
Let the coldness of the world melt away.

— Makram ♡` },
  { id: 37, title: "Open me when you miss my voice", category: "Missing", content: `I know texts aren’t the same. I know you want to hear me.

But imagine my voice right now. Low, soft, just for you.
Imagine me whispering your name.
Imagine me saying "I love you."

Can you hear it?
I’m saying it right now, wherever I am. I love you. I love you. I love you.

— Makram ♡` },
  { id: 38, title: "Open me when you feel loved", category: "Sweet", content: `Hold onto this feeling. Keep it safe.

This is the truth. This is reality. You ARE loved.
Not just today, but every day. Even when it doesn’t feel like it, this love is the foundation of everything.

Soak it in. You deserve every bit of it.

— Makram ♡` },
  { id: 39, title: "Open me anytime", category: "Sweet", content: `Just a random reminder that you are loved, you are chosen, and you are mine.

You don’t need a reason to be special. You just are.
I hope this made you smile, even just a little.

Now go back to being amazing.

— Makram ♡` },

  // Us (40-49)
  { id: 40, title: "Our first day ♡", category: "Us", content: `March 1st, 2026.

A date that changed everything.
Looking back, it’s crazy how one day can shift your entire life. Before that, we were just two people existing in the same world. After that, we became "us."

I remember the feeling. The nerves. The excitement. The realization that "oh, this is different."
It wasn’t just a normal day. It was the start of my favorite chapter.

I’m so glad I showed up that day. I’m so glad you did too.

— Makram ♡` },
  { id: 41, title: "The way you look at me", category: "Us", content: `There’s a specific way you look at me sometimes.

It’s not just a glance. It’s like you’re really *seeing* me.
It makes me feel seen. It makes me feel important.
And honestly? It makes me a little weak in the knees (don’t tell anyone).

When you look at me like that, I forget everything else. The noise fades. The stress disappears. It’s just you and me.
Please never stop looking at me like that.

— Makram ♡` },
  { id: 42, title: "Why I chose you", category: "Us", content: `I didn’t choose you because it was convenient.
I didn’t choose you because I was bored.
I chose you because my soul recognized yours.

I chose you because you are kind.
I chose you because you are funny.
I chose you because you challenge me.
I chose you because being with you feels like coming home.

And if I had to choose again? I’d choose you every single time. In every universe.

— Makram ♡` },
  { id: 43, title: "What I admire about you", category: "Us", content: `Where do I even start?

I admire your heart. It’s so big and so soft, even when the world is hard.
I admire your strength. You handle things with such grace.
I admire your mind. The way you think, the way you see the world.

But mostly, I admire how you make people feel. You have this gift of making everyone around you feel special.
I’m just lucky I get to be the one closest to you.

— Makram ♡` },
  { id: 44, title: "Your smile effect", category: "Us", content: `It’s actually dangerous.

You smile, and suddenly I’m ready to do anything you ask.
You smile, and I forget why I was mad.
You smile, and my day gets 100% better.

It’s like a superpower. Use it wisely (or don’t, I don’t mind being under your spell).

— Makram ♡` },
  { id: 45, title: "The basketball day", category: "Us", content: `Oh, we have to talk about this.

Me on the court. You watching.
The glances. The "I’m not looking at you but I’m totally looking at you" vibe.
I was trying so hard to focus on the game, but how could I?

I knew you were there. I felt your eyes on me. And I loved every second of it.
That day was the prologue to our story. The tension. The curiosity.
I’d play a thousand games just to feel that spark again.

— Makram ♡` },
  { id: 46, title: "The way you calm me", category: "Us", content: `You are my human Xanax (but healthy).

When I’m stressed, just hearing your voice brings me down.
When I’m angry, your touch softens me.
You have this energy that just says "it’s going to be okay."

I don’t know how you do it, but you balance me out perfectly.
You are my peace in a chaotic world.

— Makram ♡` },
  { id: 47, title: "What makes you different", category: "Us", content: `It’s not one big thing. It’s a million little things.

It’s the way you care about details.
It’s the way you get excited about small things.
It’s the way you are unapologetically yourself.

Most people are copies. You are an original.
There is literally no one else like you, Walae. And that’s why I’m so obsessed.

— Makram ♡` },
  { id: 48, title: "The soft side of you", category: "Us", content: `I love the side of you that the world doesn’t always see.

The side that needs cuddles.
The side that cries at sad movies.
The side that whispers "I love you" when you’re half asleep.

That softness is a gift. Thank you for trusting me with it. I promise to protect it always.

— Makram ♡` },
  { id: 49, title: "Why you’re special", category: "Us", content: `You’re special because you’re you.

Not because of what you do, or what you look like (though you’re gorgeous), or what you achieve.
You’re special because of your essence. Your soul.

You make the world brighter just by existing.
And you make my world complete.

— Makram ♡` },

  // Fun / Cute Energy (50-59)
  { id: 50, title: "Warning: too cute", category: "Cute", content: `⚠️ SECURITY ALERT ⚠️

You have been detected being illegally cute.
Authorities (me) are on their way to apprehend you with hugs and kisses.

Please do not resist.
Actually, you can resist a little. It’s cute when you struggle.

— Officer Makram 👮‍♂️` },
  { id: 51, title: "Dangerous level of beauty", category: "Cute", content: `Okay, we need to talk.

You can’t just walk around looking this good. It’s a hazard.
People are driving off the road. Birds are flying into windows. I’m forgetting how to speak English.

Tone it down... actually, don’t. I like showing you off.
But seriously, save some beauty for the rest of us.

— Makram ♡` },
  { id: 52, title: "Certified favorite person", category: "Cute", content: `🏆 CERTIFICATE OF ACHIEVEMENT 🏆

This document certifies that
WALAE
has officially been named
MAKRAM’S FAVORITE PERSON

Perks include:
- Unlimited attention
- Free food (sometimes)
- Hoodie stealing privileges
- Lifetime supply of love

Signed,
Management (Me)` },
  { id: 53, title: "Main character energy", category: "Funny", content: `Let’s be honest.

This is your movie. The rest of us are just NPCs (Non-Playable Characters).
You walk into a room and the lighting changes. The soundtrack starts playing.

I’m just the love interest who is hopelessly in love with the protagonist.
And I’m okay with that role. As long as I get the girl in the end.

— Makram ♡` },
  { id: 54, title: "Walae supremacy", category: "Funny", content: `In this house, we believe in Walae Supremacy.

Whatever Walae says, goes.
If Walae says the sky is green, I’m buying green paint.
If Walae wants ice cream at 3am, we are getting ice cream.

It’s not a dictatorship. It’s a benevolent queenship.
And I am your loyal subject.

— Makram ♡` },
  { id: 55, title: "Pink queen mode", category: "Cute", content: `👑 ACTIVATING PINK QUEEN MODE 👑

Everything is soft. Everything is aesthetic.
You are glowing. The vibes are immaculate.

You deserve a crown, a throne, and probably a strawberry milkshake.
Go rule your kingdom, your highness.

— King Makram` },
  { id: 56, title: "My favorite notification", category: "Sweet", content: `*Ding*

My phone lights up. I see your name.
And instantly, I smile.

It doesn’t matter what the text says. It could be "I love you" or "I’m hungry" or a random TikTok.
Just knowing you’re thinking of me makes my dopamine spike.

You are the only notification I never swipe away.

— Makram ♡` },
  { id: 57, title: "Soft but powerful", category: "Sweet", content: `You are a paradox.

You are soft like a cloud, gentle and kind.
But you are powerful like a storm, strong and resilient.

You have a gentle heart but a spine of steel.
It’s the most attractive combination in the world.
Don’t ever lose your fire, and don’t ever lose your softness.

— Makram ♡` },
  { id: 58, title: "Official comfort person", category: "Sweet", content: `You are my hoodie.
You are my rainy day playlist.
You are my hot coffee on a cold morning.

You are comfort in human form.
When I’m with you, I can exhale. I can relax.
Thank you for being my safe space.

— Makram ♡` },
  { id: 59, title: "My peace", category: "Deep", content: `The world is loud. You are quiet.
The world is chaotic. You are calm.
The world is demanding. You are understanding.

You are the silence between the notes that makes the music beautiful.
You are my peace.

— Makram ♡` },

  // Emotional Layers (60-69)
  { id: 60, title: "When you feel overwhelmed", category: "Reassurance", content: `I know it feels like too much right now.
I know the noise is loud and the pressure is heavy.

But you don’t have to carry it all at once.
Put it down. Just for a moment.

Focus on one thing: my voice telling you that you’re doing a good job.
You are handling more than you give yourself credit for.
I am so proud of you.

— Makram ♡` },
  { id: 61, title: "When you need reassurance", category: "Reassurance", content: `Let me be clear:
I am not going anywhere.
I am not changing my mind.
I am not looking for anyone else.

You are it for me. Today, tomorrow, and every day after that.
You don’t have to earn my love; you already have it.

— Makram ♡` },
  { id: 62, title: "When you feel distant", category: "Deep", content: `Distance is just a feeling, not a reality.
Even if we are miles apart, or just feeling emotionally quiet, my heart is tethered to yours.

Reach out. I’m right here.
I’m just one text, one call, one thought away.
Come back to me.

— Makram ♡` },
  { id: 63, title: "When you overthink us", category: "Reassurance", content: `We are not fragile.
We are not going to break because of a small misunderstanding or a bad day.
We are solid.

Don’t let your mind create cracks where there aren’t any.
I choose you. I choose us.
And I’m not letting go.

— Makram ♡` },
  { id: 64, title: "When you need clarity", category: "Deep", content: `Here is the truth:
You are loved. You are valued. You are wanted.

Everything else is just noise.
If you’re confused about where you stand, let me plant your feet on solid ground:
You stand right in the center of my heart.

— Makram ♡` },
  { id: 65, title: "When you doubt my feelings", category: "Reassurance", content: `Doubt is a liar.
My feelings for you are the most real thing in my life.

I don’t just "like" you. I adore you.
I don’t just "want" you. I need you.
Never question what is undeniably yours.

— Makram ♡` },
  { id: 66, title: "When you need to breathe", category: "Deep", content: `Inhale (1... 2... 3...)
Exhale (1... 2... 3...)

The world can wait.
The problems can wait.
Right now, it’s just you and your breath.
And me, holding space for you.

— Makram ♡` },
  { id: 67, title: "When you feel small", category: "Reassurance", content: `You are not small.
You are a universe.

You have galaxies inside you. You have storms and sunsets and oceans.
Don’t let anyone make you feel insignificant.
To me, you are everything.

— Makram ♡` },
  { id: 68, title: "When you feel misunderstood", category: "Deep", content: `I know it’s frustrating when the world doesn’t get you.
But I get you.

I see your intentions. I see your heart.
You don’t have to explain yourself to me.
I know who you are, and I love who you are.

— Makram ♡` },
  { id: 69, title: "When you just need me", category: "Missing", content: `I’m here.
I’m always here.

You don’t need a reason. You don’t need an excuse.
If you need me, just say the word.
I’ll drop everything for you.

— Makram ♡` },

  // Short & Minimal (70-79)
  { id: 70, title: "Just you ♡", category: "Sweet", content: `It’s always been you.
It will always be you.
Just you.

— Makram ♡` },
  { id: 71, title: "Always you", category: "Sweet", content: `In every room, I look for you.
In every crowd, I see you.
In every dream, I meet you.

— Makram ♡` },
  { id: 72, title: "Only you", category: "Sweet", content: `No one else compares.
No one else comes close.
You are the standard.

— Makram ♡` },
  { id: 73, title: "Still you", category: "Sweet", content: `After all this time?
Yes.
Still you.

— Makram ♡` },
  { id: 74, title: "Forever mood", category: "Sweet", content: `Current mood: Loving you.
Tomorrow’s mood: Loving you more.
Forever mood: Loving you most.

— Makram ♡` },
  { id: 75, title: "Pink thoughts", category: "Cute", content: `My brain is 90% pink clouds,
5% basketball,
and 5% wondering what you’re doing.

— Makram ♡` },
  { id: 76, title: "My heart", category: "Sweet", content: `It beats for you.
It aches for you.
It belongs to you.

— Makram ♡` },
  { id: 77, title: "My calm", category: "Deep", content: `You are the deep breath
after a long day.

— Makram ♡` },
  { id: 78, title: "My softness", category: "Deep", content: `In a hard world,
you are my soft place to land.

— Makram ♡` },
  { id: 79, title: "My person", category: "Us", content: `You.
Simply, purely, undeniably.
You.

— Makram ♡` },

  // Slightly Funny (80-89)
  { id: 80, title: "If you’re being stubborn", category: "Funny", content: `Oh, I know that look.
Arms crossed? Maybe a little pout? Refusing to admit I’m right?

It’s okay. You can be stubborn.
But just know that I am way more stubborn about loving you than you are about whatever this is.
So take your time. I’ll be here when you’re done being a brat. ;)

— Makram ♡` },
  { id: 81, title: "If you’re ignoring me", category: "Funny", content: `I see you.
I know you see my messages.
I know you’re trying to make a point.

And honestly? It’s kind of working because I miss you.
But also... stop it. Come back. I’m bored without you.

— Makram ♡` },
  { id: 82, title: "If you’re pretending not to care", category: "Funny", content: `Nice try.
But I know you care.
I know you care a LOT.

You can act cool all you want, but I know the truth.
You’re soft. You’re mushy. And you’re obsessed with me.
It’s okay to admit it. I won’t tell anyone (except everyone).

— Makram ♡` },
  { id: 83, title: "If you’re acting tough", category: "Funny", content: `Look at you, acting all tough and scary.
It’s adorable.

You’re about as scary as a angry kitten.
But sure, I’ll pretend to be intimidated if it makes you happy.
(I’m not intimidated at all. I just want to hug you.)

— Makram ♡` },
  { id: 84, title: "If you’re jealous but won’t say it", category: "Funny", content: `Your silence is loud.
I can feel the side-eye through the screen.

Let me save you the trouble:
No one else matters.
No one else is you.
You can put the claws away now. I’m all yours.

— Makram ♡` },
  { id: 85, title: "If you’re dramatic today", category: "Funny", content: `And the Oscar goes to...
WALAE!

For her performance in "The World Is Ending Because Makram Didn’t Reply In 0.2 Seconds."
Thank you, thank you.
You’re dramatic, but you’re my drama queen. And I wouldn’t trade the entertainment for anything.

— Makram ♡` },
  { id: 86, title: "If you need princess treatment", category: "Cute", content: `Crown on.
Chin up.
Your carriage awaits.

You deserve to be spoiled. You deserve the best.
So tell me what you need.
Food? Compliments? A foot massage? (Okay maybe not that last one, but I’ll think about it.)
Your wish is my command.

— Makram ♡` },
  { id: 87, title: "If you want compliments", category: "Cute", content: `You are stunning.
You are brilliant.
You are hilarious.
You are kind.
You are the best thing that ever happened to me.

Need more?
You smell good.
You have great taste (obviously, you chose me).
You are perfect.

— Makram ♡` },
  { id: 88, title: "If you want attention x100", category: "Cute", content: `ATTENTION ATTENTION ATTENTION.
LOOK AT ME.
I AM LOOKING AT YOU.

Is this enough?
No?
Okay.
I LOVE YOU I LOVE YOU I LOVE YOU.

Better?
(Probably not, but I tried.)

— Makram ♡` },
  { id: 89, title: "If you’re smiling right now", category: "Sweet", content: `Gotcha.
I knew I could make you smile.

And now that you’re smiling, keep it there.
It looks good on you.
Actually, it looks perfect on you.

— Makram ♡` },

  // Final Emotional Set (90-99)
  { id: 90, title: "For hard days", category: "Deep", content: `On the days when you feel like you can’t win, remember this:
You have already won my heart.

And as long as you have that, you have a teammate.
We will get through the hard stuff together.
I’m not going anywhere.

— Makram ♡` },
  { id: 91, title: "For soft days", category: "Sweet", content: `These are my favorite days.
The days when everything feels easy.
The days when we just laugh and exist.

Thank you for giving me so many soft days.
I hope I give you just as many.

— Makram ♡` },
  { id: 92, title: "For silent days", category: "Deep", content: `Silence isn’t bad.
Silence is where we recharge.

If you need to be quiet today, be quiet.
I’ll sit in the silence with you.
I don’t need words to know I love you.

— Makram ♡` },
  { id: 93, title: "For loud days", category: "Deep", content: `When the world is screaming, listen to my whisper.
You are safe.
You are loved.
You are okay.

Let my voice be your anchor in the storm.

— Makram ♡` },
  { id: 94, title: "For every version of you", category: "Deep", content: `I don’t just love the happy you.
I love the sad you.
The angry you.
The tired you.
The confused you.

I love every single version of you that exists.
Because they are all parts of the person who changed my life.

— Makram ♡` },
  { id: 95, title: "For the girl I adore", category: "Sweet", content: `Adore is a strong word.
And it’s the only word that fits.

I don’t just love you; I cherish you.
You are precious to me.
Please treat yourself with the same care that I feel for you.

— Makram ♡` },
  { id: 96, title: "For the girl I chose", category: "Us", content: `Out of billions of people.
Out of infinite possibilities.
I chose you.

And I will keep choosing you.
Every morning. Every night. Every moment.
It’s the easiest choice I’ve ever made.

— Makram ♡` },
  { id: 97, title: "For my Walae", category: "Us", content: `My Walae.
Just saying your name makes me smile.

You are my person. My partner. My best friend.
Thank you for being mine.

— Makram ♡` },
  { id: 98, title: "For us", category: "Us", content: `Look at us.
We’re doing it.
We’re building something real. Something beautiful.

It’s not always perfect, but it’s ours.
And I love what we are building.

— Makram ♡` },
  { id: 99, title: "Until infinity ♡", category: "Us", content: `This isn’t the end of the cards.
It’s just the beginning of forever.

There is no limit to how much I love you.
There is no expiration date on us.
To infinity and beyond, baby.

— Makram ♡` },

  // --- NEW CARDS (100-199) ---

  // Soft Emotional (100-109)
  { id: 100, title: "When you feel quiet", category: "Deep", content: `You don’t always have to speak.
Your presence is enough for me.

I love the quiet moments with you just as much as the loud ones.
We can just sit here. No pressure. No words.
Just us.

— Makram ♡` },
  { id: 101, title: "When you feel distant", category: "Deep", content: `Come back to me.
Not physically, but emotionally.

I know sometimes you retreat into your shell to protect yourself.
But you don’t need armor with me.
I’m safe. I promise.

— Makram ♡` },
  { id: 102, title: "When your mind won’t stop", category: "Deep", content: `I know it’s loud in there.
I know the thoughts are spinning.

Let me be your anchor.
Focus on this one true thing:
I love you.
Let that be the thought that quiets all the others.

— Makram ♡` },
  { id: 103, title: "When you need a reminder", category: "Reassurance", content: `Reminder:
You are beautiful.
You are smart.
You are kind.
You are loved.
You are mine.

Read that again. And again. Until you believe it.

— Makram ♡` },
  { id: 104, title: "When you feel fragile", category: "Reassurance", content: `It’s okay to be fragile.
It’s okay to feel like you might break.

But I am holding you together.
I will handle you with care.
I will be gentle with your heart.
You are safe in my hands.

— Makram ♡` },
  { id: 105, title: "When you need comfort", category: "Reassurance", content: `I wish I could wrap you up in my arms right now.
I wish I could shield you from everything that hurts.

But since I can’t be there physically, let these words be a hug.
I’ve got you. I’m here. You’re okay.

— Makram ♡` },
  { id: 106, title: "When you miss my touch", category: "Missing", content: `I miss touching you too.
I miss holding your hand. I miss brushing your hair back. I miss just being close.

Close your eyes and imagine my hand on yours.
Feel the warmth?
That’s me, thinking of you.

— Makram ♡` },
  { id: 107, title: "When you feel sensitive", category: "Deep", content: `Your sensitivity is not a weakness.
It’s a superpower. It means you feel the world deeply.

Don’t apologize for feeling things.
I love that you have such a big heart.
I’ll protect it for you.

— Makram ♡` },
  { id: 108, title: "When your heart feels heavy", category: "Deep", content: `Let me carry some of that weight.
You don’t have to do it all alone.

Tell me what’s wrong. Or don’t.
Just know that I’m standing right beside you, ready to help you lift it.

— Makram ♡` },
  { id: 109, title: "When you feel unsure", category: "Reassurance", content: `If you’re unsure about anything, be sure about this:
I am on your team.

I am your biggest fan. Your partner. Your safe place.
Whatever happens, we face it together.

— Makram ♡` },

  // Romantic Energy (110-119)
  { id: 110, title: "Because you’re mine", category: "Sweet", content: `And that is the best thing you could ever be.
Mine to love.
Mine to hold.
Mine to protect.

I take that title seriously.
You are my most precious person.

— Makram ♡` },
  { id: 111, title: "Because I chose you", category: "Us", content: `I didn’t just stumble into this.
I walked into it with my eyes wide open.

I saw you. I liked you. I wanted you.
And I chose you.
And I’m going to keep choosing you every single day.

— Makram ♡` },
  { id: 112, title: "Because you matter", category: "Reassurance", content: `You matter to me.
You matter to your friends.
You matter to the world.

Your existence makes a difference.
Never forget how important you are.

— Makram ♡` },
  { id: 113, title: "Because you’re rare", category: "Sweet", content: `They don’t make them like you anymore.
You have a vintage heart in a modern world.

You are a gem. A diamond. A rare find.
And I’m the lucky one who gets to keep you.

— Makram ♡` },
  { id: 114, title: "Because you’re magic", category: "Sweet", content: `You don’t need a wand.
You just need to smile, and the whole room lights up.

You have this magic about you that makes people feel good.
It’s my favorite kind of spell.

— Makram ♡` },
  { id: 115, title: "Because you’re different", category: "Sweet", content: `You’re not like anyone I’ve ever met.
You have your own rhythm. Your own style. Your own way of seeing things.

And I love every bit of it.
Never try to fit in. You were born to stand out.

— Makram ♡` },
  { id: 116, title: "Because you glow", category: "Sweet", content: `You have this light inside you.
Even on your dark days, it shines through.

It draws people to you. It drew me to you.
Keep glowing, my star.

— Makram ♡` },
  { id: 117, title: "Because you shine", category: "Sweet", content: `You don’t just sparkle; you shine.
You are radiant.

When you walk into a room, you own it.
And I’m just standing there like, "Yeah, that’s my girl."

— Makram ♡` },
  { id: 118, title: "Because you’re unforgettable", category: "Sweet", content: `Once someone meets you, they can’t forget you.
You leave an imprint on people’s hearts.

You definitely left one on mine.
It’s permanent. And I love it.

— Makram ♡` },
  { id: 119, title: "Because you’re you", category: "Sweet", content: `And that is the best reason of all.
I don’t love you for what you do.
I love you for who you are.

Just you. Walae.
My Walae.

— Makram ♡` },

  // Reassurance Mode (120-129)
  { id: 120, title: "I’m not going anywhere", category: "Reassurance", content: `You can’t get rid of me that easily.
I’m like a sticker that won’t peel off.
I’m like a song stuck in your head.

But seriously, I’m here for the long haul.
Through the good, the bad, and the messy.
I’m staying.

— Makram ♡` },
  { id: 121, title: "I still choose you", category: "Reassurance", content: `Every morning when I wake up, I make a choice.
And every morning, the answer is the same:
You.

It’s not a habit. It’s a decision.
And it’s the best decision I make every single day.

— Makram ♡` },
  { id: 122, title: "You’re safe with me", category: "Reassurance", content: `You don’t have to hide your feelings here.
You don’t have to pretend to be perfect.

With me, you can just be.
I am your safe harbor.
Drop your anchor and rest.

— Makram ♡` },
  { id: 123, title: "I care more than I show", category: "Deep", content: `Sometimes words aren’t enough.
Sometimes I can’t express just how deep this goes.

But if you could see inside my heart, you’d see your name written everywhere.
I care about you more than I can ever explain.

— Makram ♡` },
  { id: 124, title: "I’m proud of you", category: "Reassurance", content: `I see how hard you try.
I see the battles you fight silently.
I see the progress you make.

And I am so incredibly proud of the woman you are becoming.
Keep going. I’m cheering for you.

— Makram ♡` },
  { id: 125, title: "You’re enough", category: "Reassurance", content: `Stop trying to be more.
Stop trying to be different.

You, exactly as you are right now, are enough.
You are enough for me. You are enough for the world.
You are complete.

— Makram ♡` },
  { id: 126, title: "I see you", category: "Reassurance", content: `I don’t just look at you. I see you.
I see the kindness in your eyes.
I see the love in your actions.
I see the beauty in your soul.

You are seen. You are known. You are loved.

— Makram ♡` },
  { id: 127, title: "I hear you", category: "Reassurance", content: `Your voice matters to me.
Your opinions matter to me.
Your feelings matter to me.

Speak up. I’m listening.
I will always listen to you.

— Makram ♡` },
  { id: 128, title: "I understand you", category: "Reassurance", content: `Even when you don’t make sense to yourself, you make sense to me.
I know your heart.
I know your intentions.

You don’t have to explain everything.
I get it. And I get you.

— Makram ♡` },
  { id: 129, title: "I appreciate you", category: "Reassurance", content: `Thank you.
Thank you for being you.
Thank you for being in my life.
Thank you for loving me.

I don’t say it enough, but I appreciate every single thing about you.

— Makram ♡` },

  // Soft Princess Mode (130-139)
  { id: 130, title: "For my pretty girl", category: "Cute", content: `You are so pretty it hurts.
Like, actually physically hurts my eyes because you shine so bright.

But it’s a good pain.
I could stare at you forever.
(And I probably will.)

— Makram ♡` },
  { id: 131, title: "For my soft girl", category: "Cute", content: `You are made of clouds and cotton candy and everything sweet.
You are the softest thing in my life.

I just want to wrap you in blankets and protect you from the world.
Stay soft, baby.

— Makram ♡` },
  { id: 132, title: "For my favorite human", category: "Cute", content: `Out of 8 billion people, you are my favorite.
Better than celebrities.
Better than fictional characters.
Better than pizza (and that’s saying a lot).

You win. Hands down.

— Makram ♡` },
  { id: 133, title: "For my comfort", category: "Deep", content: `You are the feeling of taking off tight shoes after a long day.
You are the feeling of a warm bath.
You are the feeling of home.

You comfort my soul in a way nothing else can.

— Makram ♡` },
  { id: 134, title: "For my calm", category: "Deep", content: `When my mind is a hurricane, you are the eye of the storm.
Still. Quiet. Safe.

Just being near you lowers my heart rate.
You are my serenity.

— Makram ♡` },
  { id: 135, title: "For my heart", category: "Sweet", content: `This heart?
It’s yours.
You hold the key. You hold the deed. You own the place.

Please take good care of it.
(I know you will.)

— Makram ♡` },
  { id: 136, title: "For my safe place", category: "Deep", content: `The world is scary.
You are not.

You are the place I run to when I need to hide.
You are the walls that protect me.
Thank you for being my sanctuary.

— Makram ♡` },
  { id: 137, title: "For my peace", category: "Deep", content: `Peace isn’t a place. It’s a person.
And for me, that person is you.

With you, the war in my head stops.
With you, everything is quiet.

— Makram ♡` },
  { id: 138, title: "For my smile", category: "Sweet", content: `You are the reason for 99% of my smiles.
The other 1% is probably memes you sent me.

So basically, you are the reason for 100% of my happiness.
Keep smiling, so I can smile too.

— Makram ♡` },
  { id: 139, title: "For my world", category: "Us", content: `You are not just in my world.
You ARE my world.

The sun, the moon, the stars.
Everything revolves around you.
And I wouldn’t have it any other way.

— Makram ♡` },

  // Playful (140-149)
  { id: 140, title: "If you’re being cute", category: "Cute", content: `Stop it.
You’re being too cute.
My heart can’t handle it.

Actually, don’t stop.
Keep being cute.
I’ll just suffer in love. It’s a good way to go.

— Makram ♡` },
  { id: 141, title: "If you’re pretending to be mad", category: "Funny", content: `I see that little smile you’re trying to hide.
You can’t stay mad at me. I’m too charming.
(And you love me too much.)

So just drop the act and come give me a hug.
I know you want to.

— Makram ♡` },
  { id: 142, title: "If you want kisses x10", category: "Cute", content: `Only 10?
That’s rookie numbers.
I was thinking more like 1,000.

But okay, I’ll start with 10.
😘😘😘😘😘😘😘😘😘😘
(And one for good luck: 😘)

— Makram ♡` },
  { id: 143, title: "If you want cuddles x100", category: "Cute", content: `Sending virtual cuddles...
Loading...
██████████ 100%

You have been successfully wrapped in a giant bear hug.
Do not attempt to escape.
Resistance is futile.

— Makram ♡` },
  { id: 144, title: "If you want drama", category: "Funny", content: `Oh, you want drama?
*Gasps in Spanish soap opera*

How could you? After everything I’ve done for you?
I cooked for you! I cleaned for you! I gave you my heart!
(Is this enough drama or should I faint?)

— Makram ♡` },
  { id: 145, title: "If you want chaos", category: "Funny", content: `Let’s cause some chaos.
Let’s steal a car.
Let’s rob a bank.
Let’s... okay, maybe let’s just order pizza and watch a movie.

But we can eat the pizza *chaotically*.
(Like starting from the crust.)

— Makram ♡` },
  { id: 146, title: "If you want love", category: "Sweet", content: `If you tapped this, it probably means you want a little extra love right now… and honestly, I’m really glad you came here for it.

Because loving you isn’t something that ever feels forced to me. It’s something that comes naturally. When you want love from me, it just means you want to feel safe, cared for, and reminded that you matter — and I’m always happy to give you that.

So right now, this little moment is just for you.

Imagine me being close to you, speaking softly, making sure you feel calm and comfortable. No pressure, no stress, just warmth. Because when someone is important to you, giving them love should feel easy.

Maybe you tapped this because you needed reassurance. Maybe you wanted to feel a little more appreciated. Maybe you just wanted to feel someone’s affection for a moment.

Well… you have it.

You’re someone who matters to me. Someone I genuinely care about. Someone whose presence can make my day better without even trying.

If I was there with you right now, I’d probably smile a little and say “so someone needed some love today huh,” and then I’d still give it to you anyway — a little comfort, a little closeness, a little reminder that you’re important to me.

So here it is: a little piece of my love, just for you in this moment.

And if you ever need more… you know where to find it.

— Makram ♡` 
  },
  { id: 147, title: "If you want attention", category: "Cute", content: `Hello.
Hi.
Hey.
Look at me.
I am obsessed with you.
You are the center of my universe.

Okay, now that I have your attention...
I love you. That is all.

— Makram ♡` },
  { id: 148, title: "If you want compliments", category: "Cute", content: `You are a masterpiece.
You are a work of art.
You are a 10/10.
You are a solid gold bar in a world of plastic.

I could go on forever.
But I think you get the point: You’re perfect.

— Makram ♡` },
  { id: 149, title: "If you want me", category: "Intimate", content: `I’m right here.
I’m not going anywhere.
I’m all yours.

Body, mind, and soul.
Take what you need. It’s all for you anyway.

— Makram ♡` },

  // Deep Layer (150-159)
  { id: 150, title: "About us", category: "Us", content: `We are not just a couple.
We are a team.
We are partners in crime.
We are best friends.

What we have is rare. It’s a connection that goes beyond the surface.
I value "us" more than anything.

— Makram ♡` },
  { id: 151, title: "About trust", category: "Deep", content: `Trust is the foundation of everything.
And I trust you with my heart.
I trust you with my secrets.
I trust you with my vulnerability.

Thank you for being a safe place for my trust to land.
I promise to always be worthy of yours.

— Makram ♡` },
  { id: 152, title: "About loyalty", category: "Deep", content: `Loyalty isn’t just about not cheating.
It’s about having each other’s backs.
It’s about defending your name when you’re not in the room.
It’s about choosing you, even when it’s hard.

I am loyal to you. Always.

— Makram ♡` },
  { id: 153, title: "About patience", category: "Deep", content: `Love is patient.
And I will be patient with you.
I will be patient with your growth.
I will be patient with your bad days.

We have a lifetime to figure this out. There is no rush.

— Makram ♡` },
  { id: 154, title: "About timing", category: "Deep", content: `They say timing is everything.
And I think our timing was perfect.

We met exactly when we were supposed to.
Not a moment too soon, not a moment too late.
Fate knew what it was doing.

— Makram ♡` },
  { id: 155, title: "About growth", category: "Deep", content: `I want to grow with you.
I want to see who you become in 5 years, 10 years, 50 years.
I want us to evolve together, to learn together, to become better versions of ourselves together.

Growing with you is my favorite journey.

— Makram ♡` },
  { id: 156, title: "About future", category: "Us", content: `When I look at the future, I see you.
I see us traveling.
I see us laughing.
I see us building a life.

The future used to be scary. Now, it looks like an adventure.
Because I know you’ll be there.

— Makram ♡` },
  { id: 157, title: "About forever", category: "Us", content: `Forever is a long time.
But with you, it doesn’t feel long enough.

I want every second. Every minute. Every hour.
I want forever with you.

— Makram ♡` },
  { id: 158, title: "About effort", category: "Deep", content: `Relationships take work.
But you are worth every bit of effort.

I promise to never stop trying.
I promise to never get lazy with your heart.
I will date you forever.

— Makram ♡` },
  { id: 159, title: "About communication", category: "Deep", content: `We will talk.
We will listen.
We will understand.

Even when it’s hard, we will communicate.
Because silence builds walls, and words build bridges.
I want to build bridges with you.

— Makram ♡` },

  // Memory Style (160-169)
  { id: 160, title: "That first feeling", category: "Us", content: `Do you remember it?
That first flutter in your stomach?
That first realization that "oh, I like him"?

I remember mine.
It hit me like a train.
And I haven’t recovered since.

— Makram ♡` },
  { id: 161, title: "That first smile", category: "Us", content: `The first time I saw you smile at me...
I knew I was in trouble.

It was the kind of smile that promised trouble and happiness all at once.
And I signed up for both immediately.

— Makram ♡` },
  { id: 162, title: "That first laugh", category: "Us", content: `Hearing you laugh for the first time was like hearing my favorite song.
I wanted to put it on repeat.

And now, making you laugh is my full-time job.
(And I take my job very seriously.)

— Makram ♡` },
  { id: 163, title: "That first moment", category: "Us", content: `There was a moment.
A tiny, fleeting moment where the air shifted.
Where we went from strangers to something more.

I cherish that moment.
It was the spark that started the fire.

— Makram ♡` },
  { id: 164, title: "That first spark", category: "Us", content: `It wasn’t just a spark.
It was a lightning strike.

Electric. Sudden. Powerful.
It woke me up.
And I’ve been wide awake ever since.

— Makram ♡` },
  { id: 165, title: "That first day", category: "Us", content: `March 1st.
The day the calendar became important.
The day "me" became "we."

I will celebrate that day forever.

— Makram ♡` },
  { id: 166, title: "That first message", category: "Us", content: `I stared at my phone for so long.
Typing. Deleting. Typing again.
Wondering if I should send it.

I’m so glad I hit send.
Best decision of my life.

— Makram ♡` },
  { id: 167, title: "That first “hi”", category: "Us", content: `It started with me saying "heyy".
Just a simple word.
But it was the start of my favorite story.

Look at where we started...
And look at us now.

— Makram ♡`, image: "https://majorelle-centreaffaires.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-05-at-11.38.21.jpeg" },
  { id: 168, title: "That first eye contact", category: "Us", content: `You looked at me.
I looked at you.
And the world stopped.

It sounds cliché, but it’s true.
In that moment, I saw my future.

— Makram ♡` },
  { id: 169, title: "That first vibe", category: "Us", content: `It wasn’t awkward.
It wasn’t forced.
It was just... easy.

Like we had known each other for lifetimes.
Maybe we have.

— Makram ♡` },

  // Intimate Soft (170-179)
  { id: 170, title: "Close your eyes", category: "Intimate", content: `Close them.
Trust me.

Now imagine I’m right there.
Can you feel me?
I’m closer than you think.

— Makram ♡` },
  { id: 171, title: "Imagine me there", category: "Intimate", content: `I’m sitting next to you.
My arm is around you.
You’re leaning your head on my shoulder.

The world is quiet.
We are safe.
Stay in this moment with me.

— Makram ♡` },
  { id: 172, title: "Breathe with me", category: "Intimate", content: `Take a deep breath.
In...
Out...

Match your breathing to mine.
Slow. Steady. Calm.
We are in sync.

— Makram ♡` },
  { id: 173, title: "Hold my hand", category: "Intimate", content: `Reach out your hand.
Imagine mine interlocking with yours.
Fingers laced together.
A perfect fit.

Never let go.

— Makram ♡` },
  { id: 174, title: "Lean on me", category: "Intimate", content: `You don’t have to stand tall all the time.
Lean on me.
Let me take your weight.

I am strong enough for both of us.
Rest now.

— Makram ♡` },
  { id: 175, title: "Stay here", category: "Intimate", content: `Don’t go anywhere.
Just stay in this feeling of being loved.
Let it soak into your skin.

You are so loved.
Stay here in this love.

— Makram ♡` },
  { id: 176, title: "Don’t overthink", category: "Reassurance", content: `Shhh.
Quiet the mind.
Listen to the heart.

The mind worries. The heart knows.
And your heart knows we are good.

— Makram ♡` },
  { id: 177, title: "It’s just us", category: "Intimate", content: `Forget the world.
Forget the noise.
Right now, in this digital space, it’s just us.

You and me.
And that’s all that matters.

— Makram ♡` },
  { id: 178, title: "You and me", category: "Us", content: `A team.
A partnership.
A love story.

You and me against the world.
I like our odds.

— Makram ♡` },
  { id: 179, title: "Just breathe", category: "Reassurance", content: `One more deep breath.
Feel that?
That’s life. That’s hope.

You’re doing great.
I love you.

— Makram ♡` },

  // Reassuring Calm (180-189)
  { id: 180, title: "Slow down", category: "Reassurance", content: `You’re moving too fast.
The world is spinning too quickly.

Slow down.
Take a moment.
Just be here with me.
There is no rush.

— Makram ♡` },
  { id: 181, title: "It’s okay", category: "Reassurance", content: `Whatever you’re feeling right now...
It’s okay.
Sad? Okay.
Mad? Okay.
Confused? Okay.

I love you through all of it.

— Makram ♡` },
  { id: 182, title: "You’re safe", category: "Reassurance", content: `You are safe here.
No judgment. No pressure.
Just love.

Wrap yourself in that safety.
Let it protect you.

— Makram ♡` },
  { id: 183, title: "I’m here", category: "Reassurance", content: `I’m not going anywhere.
I’m right here.
Beside you. With you. For you.

Always.

— Makram ♡` },
  { id: 184, title: "Always here", category: "Reassurance", content: `Did I mention I’m always here?
Because I am.

Yesterday. Today. Tomorrow.
You’re stuck with me.

— Makram ♡` },
  { id: 185, title: "I’ve got you", category: "Reassurance", content: `If you fall, I’ll catch you.
If you break, I’ll hold you.
If you fly, I’ll cheer for you.

I’ve got you. Completely.

— Makram ♡` },
  { id: 186, title: "Don’t worry", category: "Reassurance", content: `Worrying is borrowing trouble from tomorrow.
Don’t pay interest on trouble that hasn’t happened.

Trust that we can handle whatever comes.
Because we can.

— Makram ♡` },
  { id: 187, title: "You’re loved", category: "Reassurance", content: `You are loved more than you know.
More than I can show.
More than words can say.

But I’ll keep trying to show you anyway.

— Makram ♡` },
  { id: 188, title: "You’re valued", category: "Reassurance", content: `You are not just "someone."
You are "the one."

Your value is infinite.
To me, you are priceless.

— Makram ♡` },
  { id: 189, title: "You’re important", category: "Reassurance", content: `You are the most important person in my life.
My priority. My focus. My heart.

Never doubt your place in my life.
It’s right at the top.

— Makram ♡` },

  // Final Emotional Tier (190-199)
  { id: 190, title: "My favorite feeling", category: "Sweet", content: `My favorite feeling?
It’s you.

It’s the feeling I get when I see you.
When I talk to you.
When I think about you.
You are a feeling I never want to lose.

— Makram ♡` },
  { id: 191, title: "My favorite girl", category: "Sweet", content: `There are many girls in the world.
But there is only one Walae.

And she is my favorite.
Forever and always.

— Makram ♡` },
  { id: 192, title: "My soft spot", category: "Sweet", content: `I try to be tough.
But for you? I’m soft.

You are my weak spot. My vulnerability.
And I love that about us.

— Makram ♡` },
  { id: 193, title: "My weakness", category: "Intimate", content: `You are my kryptonite.
One look from you and I’m done.

But you’re also my strength.
Because I’d do anything for you.

— Makram ♡` },
  { id: 194, title: "My strength", category: "Deep", content: `When I feel weak, I think of you.
And suddenly, I can do anything.

You make me stronger.
You make me better.
Thank you for being my power.

— Makram ♡` },
  { id: 195, title: "My happiness", category: "Sweet", content: `Happiness used to be a concept.
Now, it has a name.
Walae.

You are my joy.

— Makram ♡` },
  { id: 196, title: "My peace", category: "Deep", content: `In a loud world, you are my silence.
In a chaotic life, you are my calm.

You are the peace I’ve been searching for.

— Makram ♡` },
  { id: 197, title: "My future", category: "Us", content: `I don’t know exactly what the future holds.
But I know who is holding my hand.

And as long as it’s you, I’m ready for anything.

— Makram ♡` },
  { id: 198, title: "My choice", category: "Us", content: `I choose you.
Over and over.
Without hesitation.
Without doubt.

I choose you.

— Makram ♡` },
  { id: 199, title: "My Walae ♡", category: "Us", content: `To my Walae.
My love. My life. My everything.

Thank you for being you.
I love you more than words can say.
And I will love you until the end of time.

— Makram ♡` },
];

export const CARD_TITLES = CARDS.map(c => c.title); // Backward compatibility if needed
