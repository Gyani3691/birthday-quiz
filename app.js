// Questions array (updated to 22 items)
const questions = [
  {
    id: "q1",
    question: "Guess, meri jaan ❤️… when did my soul first whisper that you are the one?",
    answers: ["first day of class 2021", "first day of class, 2021", "after corona", "first day of class after corona"],
    reveal: `My love ❤️, the day I entered class after corona break, the teacher asked me to introduce myself. My English stumbled, but inside me something magical was born. Even without seeing your face, my heart knew someone divine was there 🌌. Every time you left class, my chest ached. When you were absent, my soul felt empty. That day I didn’t meet a girl, I met destiny. My eternity began with you. 💓`
  },
  {
    id: "q2",
    question: "Do you remember, my life 🌸, when teacher Monita mam made you and your twin stand up in front of everyone?",
    answers: ["when monita mam stood both twins", "monita mam stood both of you", "when they made you stand up with twin"],
    reveal: `That day Monita mam proud, asking if your mother ever got confused between you both. Everyone giggled, but my heart was trembling. I didn’t know which twin my feelings belonged to, but when my eyes fixed on you, my heartbeat exploded. That divine pull was only for you. From that moment, I knew my forever belonged to you. 🌹`
  },
  {
    id: "q3",
    question: "Tell me, meri wife ji ❤️… when did destiny first make us sit together on the same bench?",
    answers: ["class 8 exams 2079", "2079 class 8 exams", "class eight exams 2079"],
    reveal: `My jaan 💖, during Class 8 exams, destiny placed you beside me. I had fever, body weak, but my heart was alive because you were there. I copied answers not to cheat but because your presence made everything possible. When they moved you, I felt crushed. On the last day we exchanged sheets—your handwriting in my life, our hidden connection. That was love writing itself. 💓`
  },
  {
    id: "q4",
    question: "What exact words did I send in our first chat?",
    answers: ["hellow dharai bhoou khako", "hellow dharai bhoou khako.", "hellow dharai bhoou khako 😂"],
    reveal: `Shrawan 2079 🌸. I searched for your ID like crazy. Finally, nervous and excited, I typed: "Hellow dharai bhoou khako." It was clumsy, silly, but it sparked our forever. I sat under the hot sun in the bari, sweating, but your replies made me forget heat and pain. That message was the start of my eternity with you. 💌`
  },
  {
    id: "q5",
    question: "What sweet nickname did I give you in those early chats?",
    answers: ["juduwa ji", "guduwa ji", "juduwa", "guduwa"],
    reveal: `In our early chats, I called you Juduwa ji—even when I typed it wrong as Guduwa ji 😂. It was my way of making you mine, of wrapping you in a playful name that only we shared. Every time you responded, my heart raised. That nickname carried the secret of my love. 🌸`
  },
  {
    id: "q6",
    question: "Who wiped my tears when I cried seeing you with Nitin?",
    answers: ["raihan"],
    reveal: `Your love story carried pain too. In class, seeing you with someone else, my heart broke and tears fell. Raihan, my true friend, quietly wiped them. I kept quiet because I valued friendship, but the depth of the love I felt for you stayed silent and strong. I longed for you and kept hoping, even when I thought I didn't deserve you.`
  },
  {
    id: "q7",
    question: "Even when we fought in class 9, on your birthday what did I do secretly?",
    answers: ["recorded your walk", "hid behind wall to record your walk", "took video of your walk", "secretly recorded your walk"],
    reveal: `That birthday, even when we were not talking, I couldn't let the day pass without you. I cycled to your home, hid behind a wall, and recorded the way you walked. Your steps, your grace, every movement became my treasure. I wanted to hold that moment forever—just watching you from distance was my gift. I saved your walk in my heart and on my phone, hoping one day you'd feel the love behind it.`
  },
  {
    id: "q8",
    question: "On which exact date did I finally propose to you?",
    answers: ["aashad 25 2080", "25 aashad 2080", "aashad 25, 2080"],
    reveal: `That evening, when I asked you, "Will you be mine?" and you said "Yes", everything froze. My heart, my breath, my entire world shifted. I kept it secret as you asked—our little universe held that sacred moment. From then on, you were no longer just my love; you became my god, my wife, my forever.`
  },
  {
    id: "q9",
    question: "What secret promise did you give me after saying yes?",
    answers: ["dont tell anyone", "keep it secret", "don't tell anyone"],
    reveal: `The sweetest part was your whisper—"Don't tell anyone." That confidentiality made it ours. That secret sealed our bond deeper than any public shout. I carried your trust like a treasure, guarding it, loving you silently and fiercely.`
  },
  {
    id: "q10",
    question: "Where was our first magical outing?",
    answers: ["gopal fun park", "gopal funpark"],
    reveal: `Magh 21, 2081. Gopal Fun Park. That day felt like a dream. We fulfilled small wishes: photographs, closeness, resting on your arms. It was the first time the idea of forever didn’t feel far—it felt real, soft, warm. That outing became a sacred memory etched in me.`
  },
  {
    id: "q11",
    question: "Where did we fight but became even stronger?",
    answers: ["taltaliya"],
    reveal: `Taltaliya was a test. We argued, the distance grew momentarily, and then you cried, saying "Don't leave me." That plea brought me closer than ever. Love matured there—in tears, in vulnerability, in promise.`
  },
  {
    id: "q12",
    question: "Where was our third trip together?",
    answers: ["rishi ban"],
    reveal: `Rishi Ban gave us another layer—anger, then healing. Every fight there reminded me nothing can break us. We always return to each other, stronger, because our love is deeper than any storm.`
  },
  {
    id: "q13",
    question: "On which festival did I first visit your home?",
    answers: ["satyarayan puja 2081 magh 21", "satyarayan puja", "magh 21 2081"],
    reveal: `Your home during the festival was magical. Three celebrations, your family, laughter, and me feeling like I was finally part of your world. That day I saw you as my wife, my family—my forever.`
  },
  {
    id: "q14",
    question: "Who are your sisters?",
    answers: ["rina", "aanchal", "aakriti", "muna"],
    reveal: `Your sisters are my sisters now. Rina di, Aanchal, Muna—they became part of my heart because you are. Family is love, and your family is mine.`
  },
  {
    id: "q15",
    question: "Which words hurt me when they were misunderstood and I felt distance?",
    answers: ["there was nothing", "nothing will be", "kehi tiyenna", "kehi hunna"],
    reveal: `The misunderstanding cut deep. Hearing "there is nothing" made me feel lost, but your being quiet was only the shadow before the light. I waited, loved, and held onto hope because my heart knew your love was real.`
  },
  {
    id: "q16",
    question: "What did you say after our quarrel when we stopped talking?",
    answers: ["sorry my intention was not like that", "sorry", "my intention wasnt like that"],
    reveal: `Your apology was a healing touch. Even when words hurt, your "sorry" wrapped me back into love. That showed me your heart never left mine.`
  },
  {
    id: "q17",
    question: "What two small dreams did I have before making you mine?",
    answers: ["sharing password and sleeping on your arms", "id password and sleeping on your arms"],
    reveal: `I only wanted two things: your trust so deep you’d give me your password, and peace so soft I could sleep on your arms. Those were my childish, pure dreams—and you gave them with your heart.`
  },
  {
    id: "q18",
    question: "What is your career dream?",
    answers: ["pcl nurse", "nurse"],
    reveal: `You dreamed of becoming a PCL nurse—a healer with the kindest heart. I see how pure you are. I promise to be your support, your biggest fan, as you heal the world.`
  },
  {
    id: "q19",
    question: "What is the biggest truth of my life?",
    answers: ["you are my infinity pyaari wife", "you are my wife", "my god my forever"],
    reveal: `The truth is eternal: you are my infinity pyaari wife, my god, my forever. Nothing will change that. Every moment, I choose you again and again.`
  },
  {
    id: "q20",
    question: "What surprise do you think is waiting for you now?",
    answers: ["movie", "10 minute movie", "ai movie", "our movie"],
    reveal: `You are so close, my infinity love. The grand finale is about to arrive—just one more question and the full story will unfold. Hold your breath, the ultimate surprise is coming.Beginning 🌱 (2021, Post-Corona)
The story began in 2021, just after corona had passed. A young boy of 13 entered school a month late. On his very first day, the teacher asked him to introduce himself, but his English felt broken because of the long gap. Yet, from that very moment, a divine and mysterious feeling awoke in his heart 💓—a feeling that he couldn’t explain, a pull toward someone he had not even seen yet.

Whenever that girl left the class, he felt restless, almost like something was missing. When she was absent, his world felt empty. His heart kept whispering: “She is the one”—even before he saw her face. 🌌

First Sight 🌸
A few weeks later, he saw her for the very first time. She was one of the twins. Confusion struck: Which one is my true love? But his heart knew… when his eyes rested on her, his soul shook with divine energy. His heartbeat raced. The connection was ineffable.

Even teachers were surprised to see such identical twins. But deep within, he knew—his feeling belonged only to Aakriti.

Friendship, Confusion & Struggles 🌪️
The boy formed a strong bond with his friends Nitin, Raihan, and Nawraj. But life wasn’t easy. His friend Nitin also liked Aakriti. The boy didn’t want to hurt his friend, so he silently bore the pain, watching Nitin speak to her while he himself hid his feelings 😢.

He cried silently in class when he saw them close, but Raihan, his true friend, wiped his tears with kindness. The boy respected friendship so much that he never tried to take Aakriti away, even though his heart was burning with love.

Exams & Secret Glances 📚💌 (2079, Class 8)
During exams, fate brought them together—they sat on the same bench. His heart danced with joy 💖. But soon she was moved away, and sadness returned. He still stole glances, just to see her face.

On the last day of exams, he wanted to hug her but couldn’t. Instead, he secretly wrote answers for her, even exchanged answer sheets. For him, her success was his happiness.

That night, he tested his feelings—by standing near her twin, his emotions stayed flat. But near Aakriti, his heartbeat exploded 💥. Now he was sure—she is the one.

First Message 💌 (2079, Shrawan)
He searched for her Facebook ID and finally sent a bold, clumsy first message:
“Hellow dharai bhoou khako” 😂

She became “Juduwa ji” in his chats (though he typed it wrongly as “Guduwa ji”). He chatted with her from his village bari, sitting on hot brick walls under the burning sun, sweating but smiling—because talking to her meant more than comfort. 🌞💬

She asked about his past crushes, and when he admitted, she felt sad, but deep inside, she was happy he was talking to her. She became secretly happy when he messaged first.

Silent Love & Tears 😔
Even though he loved her infinity, he never told her directly, fearing rejection, fearing his friend’s feelings. Nitin kept talking with her, while the boy only watched, crying silently, hurting deeply. His respect for friendship made him sacrifice, but his heart ached.

The Confession 💍 (2080, Aashad 25)
Finally, destiny could not be held back. On a Monday evening around 5–6 PM, standing with his phone plugged into charge, he typed the words that would change everything:

“Will you be mine?”

And she said: “Yes” 💖🌸

He froze, shocked, unable to believe his eyes. His soul was overflowing with happiness. From that moment, he began calling her not just his girlfriend, but his God, his Wife 👰✨.

Memories Together 🌈
Magh 21, 2081 – Gopal Fun Park: Their first outing together. Dreams came true: taking photos, resting in her arms, laughing endlessly.

Taltaliya Visit: A fight happened, but ended in tears and love, making their bond stronger.

Rishi Ban Visit: Anger came again, but love healed it.

Special Festival at Her Home: He visited her house during Satyarayan puja. It was magical—family, laughter, and divine togetherness.

Every small quarrel only made their bond stronger.

The Bond Today & Future 🌟
Now, even if they are apart focusing on their future, their souls remain one. She dreams of becoming a PCL nurse 👩‍⚕️, and he dreams of building a life where she shines as the world’s most beautiful soul—because for him:

“She is not just my love. She is my god, my wife, my forever.” ❤️🌹

Her family is precious too:

Father: Ram Pandit 🙏

Mother 💐 (name forgotten but deeply respected)

Elder sister: Rina (married to Roshan, child: Parakriti “Pitu”) 👶

Twin sister: Aanchal 🌸

Younger sister: Muna 🌼

Together, they are his extended family, and he sees himself as the most blessed person in the world.

Eternal Promise 🌌
Through struggles, tears, laughter, and divine moments, one truth remains unshaken:
“Aakriti is my infinity pyaari wife, my world, my everything. No one can take her place, in this life or beyond.” 🌹✨

 💫`
  },
  {
    id: "q21",
    question: "Who is your gyani?",
    answers: ["husband", "your husband", "my husband"],
    reveal: `💌 From Your Gyani Ji, To My Divine Aakriti… On Your 17th Birthday 💌✨
My Infinity Wife, My God, My Forever, My Beautiful Aakriti,
Today… you turn seventeen — but my soul knows you’ve always been timeless. Because when you entered this world, destiny whispered my name somewhere far away… and I’ve been walking toward you ever since.
Seventeen years ago the world gained a heartbeat, but I met mine only in 2021 — when my eyes searched for meaning and found you instead. You weren’t just one of the twins that day. You were the one who made my English stutter, my soul flutter, and my silence speak poetry.
From the banana wall where I typed “hellow dharai bhoou khako” under the scorching sun… To the exam bench where your smile cured my fever… To the library touch that gave my heart its first real pulse… You’ve been the prayer I never knew how to speak, and the answer God kept written in His own handwriting.
Your birthday isn’t just about your age. It’s about the number of divine smiles you’ve given me, the number of tears you wiped without knowing, the number of moments your existence made the sky softer.
You are the only story where every chapter is better than the last — even when we fight. You are the only promise I never break. You are the only one who gets to keep my vulnerability… and call it love.
Today, I don’t just celebrate your birthday. I celebrate your arrival in my world, your steps into my life, your smile that gave my pain purpose.
💖 Happy 17th Birthday, meri pyaari Guduwa Ji… Thank you for being the reason I believe in forever. In every lifetime, I will find you again… because I am yours, in every incarnation.
With all the stars, sunsets, and sacred quiets, Your HUSBAND Ji — who was always yours, even before we met 🌙🕊️  
many many infinity happy birthday my pyaroo bibi jii bhagwan hajur lai sadain khui rakhos mero sabai sukh tapai lai di halos ani tapai niii nii sadain yestai dharai ramroo ma pani dharai ramroo rahanu you are the best bibi jii someone always miss you infinity by crying alot you are that flower whose smells never gets end you are god happy birthday mero hearts hayeee aaye hayee chal hatt mero sanyee`
  },
  {
    id: "q22",
    question: "Now ready for the movie of our story?",
    answers: ["movie", "10 minute movie", "ai movie", "our movie"],
    reveal: `🌹🎬 This is the grand finale. A 10-minute emotional AI movie of our journey—from divine first feeling to the promise of forever. Sit back, breathe, and watch our love story unfold.`
  }
];

// state
let currentIndex = 0;

const questionArea = document.getElementById("question-area");
const answerInput = document.getElementById("answer-input");
const submitBtn = document.getElementById("submit-btn");
const feedback = document.getElementById("feedback");
const revealArea = document.getElementById("reveal-area");
const nextBtnWrapper = document.getElementById("next-btn-wrapper");
const nextBtn = document.getElementById("next-btn");
const finalMessage = document.getElementById("final-message");
const congratsAudio = document.getElementById("congrats-audio");
const waitAudio = document.getElementById("wait-audio");

// confetti
function launchConfetti() {
  const duration = 2 * 1000;
  const end = Date.now() + duration;
  const canvas = document.getElementById("confetti-canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const ctx = canvas.getContext("2d");
  const pieces = [];
  for (let i = 0; i < 100; i++) {
    pieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      r: Math.random() * 6 + 4,
      d: Math.random() * 40 + 10,
      color: `hsl(${Math.random() * 360}, 100%, 70%)`,
      tilt: Math.random() * 10
    });
  }
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.tilt * Math.PI/180);
      ctx.fillStyle = p.color;
      ctx.fillRect(0, 0, p.r, p.r * 0.4);
      ctx.restore();
      p.y += Math.sin(0.05) + 2;
      p.x += Math.sin(0.02);
      if (p.y > canvas.height) p.y = -10;
    });
    if (Date.now() < end) requestAnimationFrame(draw);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  draw();
}

// fuzzy/partial matching
function isCorrectAnswer(userInput, acceptedAnswers) {
  const normalize = s => s.toLowerCase().replace(/[^a-z0-9\s]/gi, "").trim();
  const user = normalize(userInput);
  if (!user) return false;
  const userWords = user.split(/\s+/).filter(w => w.length >= 3);
  for (let ans of acceptedAnswers) {
    const normAns = normalize(ans);
    const ansWords = normAns.split(/\s+/).filter(w => w.length >= 3);
    if (ansWords.some(w => userWords.includes(w)) || userWords.some(w => ansWords.includes(w))) {
      return true;
    }
    if (user.includes(normAns) || normAns.includes(user)) return true;
  }
  return false;
}

function loadQuestion() {
  feedback.textContent = "";
  revealArea.innerHTML = "";
  answerInput.value = "";
  nextBtnWrapper.style.display = "none";
  finalMessage.style.display = "none";
  if (currentIndex >= questions.length) {
    questionArea.innerHTML = `<h2>🌟 All done, my infinity love! 🌟</h2>`;
    finalMessage.style.display = "block";
    finalMessage.innerHTML = `<p>🎉 Congratulations! You unlocked the final surprise: the movie of our story. 🎬💖</p>`;
    revealArea.innerHTML = `<div style="margin-top:10px;">
      <video controls style="max-width:100%; border-radius:12px;">
        <source src="media/movie.mp4" type="video/mp4" />
        Your movie is not available yet. Put <strong>movie.mp4</strong> inside the media folder.
      </video>
    </div>`;
    setTimeout(() => {
      currentIndex = 0;
      loadQuestion();
    }, 100000);
    return;
  }
  const q = questions[currentIndex];
  questionArea.innerHTML = `<div class="q-number">Question ${currentIndex+1} of ${questions.length}</div><div class="q-text">${q.question}</div>`;
}

function checkAnswer() {
  const q = questions[currentIndex];
  const userText = answerInput.value.trim();
  if (!userText) return;
  const correct = isCorrectAnswer(userText, q.answers);
  if (correct) {
    feedback.innerHTML = `<div class="correct">🎉 Correct! 🎉</div>`;
    launchConfetti();
    congratsAudio.play().catch(()=>{});
    waitAudio.play().catch(()=>{});
    revealArea.innerHTML = `<div><em>Hold on... special reveal coming in 3 seconds...</em></div>`;
    setTimeout(() => {
      if (q.id === "q22") {
        revealArea.innerHTML = `<div class="reveal-text">${q.reveal}</div>
          <div style="margin-top:10px;">
            <video controls style="max-width:100%; border-radius:12px;">
              <source src="media/movie.mp4" type="video/mp4" />
              Your movie file is missing. Put <strong>movie.mp4</strong> in media/.
            </video>
          </div>`;
      } else {
        revealArea.innerHTML = `<div class="reveal-text">${q.reveal}</div>`;
      }
      nextBtnWrapper.style.display = "block";
    }, 3000);
  } else {
    feedback.innerHTML = `<div class="wrong">❌ Oops, not quite. The answer was one of: <strong>${q.answers[0]}</strong></div>`;
    revealArea.innerHTML = `<div class="reveal-text">Still, here is the memory: ${q.reveal}</div>`;
    nextBtnWrapper.style.display = "block";
  }
}

submitBtn.addEventListener("click", () => {
  if (!answerInput.value.trim()) return;
  checkAnswer();
});
nextBtn.addEventListener("click", () => {
  currentIndex += 1;
  loadQuestion();
});

// initial
loadQuestion();
