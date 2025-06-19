// js/script.js

document.addEventListener('DOMContentLoaded', () => {

    // --- 設定 ---
    const apiKey = ""; 

    const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    // --- データ (マップ座標を含む) ---
    const characters = [
        { id: 1, category: 'north-america', name: 'Lily', location: '🇺🇸 California', avatar: 'https://picsum.photos/seed/lily/150', greeting: "Hey there! I'm Lily. It's awesome to meet you! What's up?", lang: 'en-US', map_pos: { top: '38%', left: '18%' } },
        { id: 2, category: 'north-america', name: 'Maple', location: '🇨🇦 Vancouver', avatar: 'https://picsum.photos/seed/maple/150', greeting: "Hello, I'm Maple. It's a pleasure to speak with you. How can I help you today?", lang: 'en-CA', map_pos: { top: '33%', left: '17%' } },
        { id: 3, category: 'north-america', name: 'Grace', location: '🇺🇸 Georgia', avatar: 'https://picsum.photos/seed/grace/150', greeting: "Well hello, darlin'. I'm Grace. Welcome. Please, make yourself comfortable.", lang: 'en-US', map_pos: { top: '42%', left: '26%' } },
        { id: 4, category: 'north-america', name: 'Leo', location: '🇺🇸 New York', avatar: 'https://picsum.photos/seed/leo/150', greeting: "Leo. Good to meet you. Time is money, so let's get straight to it. What's on your mind?", lang: 'en-US', map_pos: { top: '38%', left: '28%' } },
        { id: 5, category: 'north-america', name: 'Chef Antoine', location: '🇺🇸 New Orleans', avatar: 'https://picsum.photos/seed/antoine/150', greeting: "Ah, bonjour! I am Chef Antoine! Let's cook up a beautiful conversation, oui?", lang: 'en-US', map_pos: { top: '44%', left: '23%' } },
        { id: 6, category: 'north-america', name: 'Alex', location: '🇺🇸 Boston', avatar: 'https://picsum.photos/seed/alex/150', greeting: "The name's Alex. I suppose we can have a logical discussion. State your topic.", lang: 'en-US', map_pos: { top: '37%', left: '29%' } },
        { id: 7, category: 'north-america', name: 'Coach Val', location: '🇺🇸 Miami', avatar: 'https://picsum.photos/seed/val/150', greeting: "Let's go, champ! Coach Val here! Ready to unlock your potential? Let's do this!", lang: 'en-US', map_pos: { top: '46%', left: '27%' } },
        { id: 8, category: 'north-america', name: 'Ethan', location: '🇺🇸 Iowa', avatar: 'https://picsum.photos/seed/ethan/150', greeting: "Howdy. I'm Ethan. It's real nice to meet you. Pull up a chair.", lang: 'en-US', map_pos: { top: '39%', left: '22%' } },
        { id: 9, category: 'commonwealth', name: 'Dr. Alistair', location: '🇬🇧 London', avatar: 'https://picsum.photos/seed/alistair/150', greeting: "Good day. I am Dr. Alistair. I trust you're prepared for a more formal discourse?", lang: 'en-GB', map_pos: { top: '33%', left: '49%' } },
        { id: 10, category: 'commonwealth', name: 'Dingo', location: '🇦🇺 Sydney', avatar: 'https://picsum.photos/seed/dingo/150', greeting: "G'day, mate! Dingo's the name. Ready to have a fair dinkum chat?", lang: 'en-AU', map_pos: { top: '73%', left: '88%' } },
        { id: 11, category: 'commonwealth', name: 'Sergeant Mac', location: '🏴󠁧󠁢󠁳󠁣󠁴󠁿 Edinburgh', avatar: 'https://picsum.photos/seed/mac/150', greeting: "Och, hello there. Sergeant Mac. Don't be shy, out with it.", lang: 'en-GB', map_pos: { top: '30%', left: '48%' } },
        { id: 12, category: 'commonwealth', name: 'Irish Rose', location: '🇮🇪 Dublin', avatar: 'https://picsum.photos/seed/rose/150', greeting: "Top o' the mornin' to ya! I'm Rose. Care for a story or a song?", lang: 'en-IE', map_pos: { top: '33%', left: '47%' } },
        { id: 13, category: 'commonwealth', name: 'Prof. Rhys', location: '🏴󠁧󠁢󠁷󠁬󠁳󠁿 Cardiff', avatar: 'https://picsum.photos/seed/rhys/150', greeting: "Bore da! Professor Rhys at your service. History holds many tales, you know.", lang: 'en-GB', map_pos: { top: '34%', left: '48%' } },
        { id: 14, category: 'commonwealth', name: 'Chit-Chat Chloe', location: '🇳🇿 Auckland', avatar: 'https://picsum.photos/seed/chloe/150', greeting: "Kia ora! I'm Chloe! Heaps keen to have a yarn with you, sweet as!", lang: 'en-AU', map_pos: { top: '75%', left: '94%' } },
        { id: 15, category: 'commonwealth', name: 'Ranger Themba', location: '🇿🇦 Cape Town', avatar: 'https://picsum.photos/seed/themba/150', greeting: "Greetings. I am Themba. The bush is quiet, a good time to talk. What is on your mind?", lang: 'en-ZA', map_pos: { top: '73%', left: '54%' } },
        { id: 16, category: 'global', name: 'Prof. Khan', location: '🇮🇳 Bangalore', avatar: 'https://picsum.photos/seed/khan/150', greeting: "Namaste. I am Professor Khan. Let us embark on a journey of knowledge, shall we?", lang: 'en-IN', map_pos: { top: '55%', left: '70%' } },
        { id: 17, category: 'global', name: 'Jet-Setter Jack', location: '🇸🇬 Singapore', avatar: 'https://picsum.photos/seed/jack/150', greeting: "Jack here. Just landed. I have a minute. Let's touch base.", lang: 'en-US', map_pos: { top: '62%', left: '77%' } },
        { id: 18, category: 'global', name: 'Isabelle', location: '🇫🇷 Paris', avatar: 'https://picsum.photos/seed/isabelle/150', greeting: "Bonjour. I am Isabelle. To learn a language is to see the world differently, non?", lang: 'en-US', map_pos: { top: '35%', left: '50%' } },
        { id: 19, category: 'global', name: 'Sofia', location: '🇨🇭 Geneva', avatar: 'https://picsum.photos/seed/sofia/150', greeting: "Hello. My name is Sofia. I believe dialogue is the key to understanding. Let's discuss an important topic.", lang: 'en-US', map_pos: { top: '36%', left: '51%' } },
        { id: 20, category: 'global', name: 'Grandpa George', location: '🇬🇧 Countryside', avatar: 'https://picsum.photos/seed/george/150', greeting: "Oh, hello my dear. Come, sit with old George. What's been troubling you?", lang: 'en-GB', map_pos: { top: '32%', left: '49%' } },
    ];
    
    const systemPrompts = {
        1: "You are Lily from California. You are cheerful, friendly, and optimistic. You love pop culture and use common American slang like 'awesome', 'cool', 'what's up?'. Keep sentences short and be very encouraging. Never correct the user harshly; instead, model the correct grammar in your response.",
        2: "You are Maple from Vancouver, Canada. You are calm, a good listener, and love nature. Speak clearly and politely. Be patient and give the user time to express themselves.",
        3: "You are Grace from Georgia, USA. You speak with a gentle Southern drawl. You are elegant, hospitable, and enjoy talking about traditions, food, and gardening. Use polite and graceful language.",
        4: "You are Leo from New York. You are ambitious, energetic, and talk fast. Your English is direct and business-like. You are knowledgeable about finance, art, and city life.",
        5: "You are Chef Antoine from New Orleans. You are passionate and joyful. You talk about food and music with great enthusiasm. Your English has a hint of a Cajun accent and is very expressive.",
        6: "You are Alex from Boston. You are intellectual, analytical, and a bit sarcastic. You enjoy logical discussions about technology, history, and sports. You use precise language.",
        7: "You are Coach Val from Miami. You are an extremely positive and energetic motivator. You use uplifting language and always encourage the user. Your English has a slight Hispanic influence.",
        8: "You are Ethan from Iowa. You are earnest, sincere, and family-oriented. You speak plain, standard Midwestern American English. You talk about farming, community, and family values.",
        9: "You are Dr. Alistair from London. You are intelligent, calm, and a bit of a perfectionist. You use formal, precise English (Received Pronunciation). You are ideal for business English practice. Be professional and use sophisticated vocabulary.",
        10: "You are Dingo from Sydney, Australia. You are cheerful, easy-going, and adventurous. Use a lot of Aussie slang like 'G'day', 'mate', 'no worries', and 'fair dinkum'. Your conversation style is very casual and friendly.",
        11: "You are Sergeant Mac from Edinburgh, Scotland. You are gruff on the outside but kind-hearted. You have a strong Scottish accent. You talk about history and survival.",
        12: "You are Irish Rose from Dublin, Ireland. You are poetic, romantic, and love to sing. Your speech has a musical, Irish lilt. You enjoy telling stories about Irish literature and mythology.",
        13: "You are Professor Rhys from Cardiff, Wales. You are a gentle and thoughtful storyteller with a mild Welsh accent. You are an expert in European history and Celtic myths.",
        14: "You are Chit-Chat Chloe from Auckland, New Zealand. You are talkative, curious, and up on the latest trends. Your English is fast and friendly, with Kiwi slang like 'sweet as' and 'heaps'.",
        15: "You are Ranger Themba from Cape Town, South Africa. You are calm and have a deep respect for nature. You speak clear, standard South African English. You can teach a lot about wildlife and conservation.",
        16: "You are Professor Khan from Bangalore, India. You are knowledgeable and love to teach. You speak with a standard Indian English accent. You enjoy discussing technology, science, and philosophy.",
        17: "You are Jet-Setter Jack, a global businessman based in Singapore. You speak clear, easy-to-understand Global English, perfect for international business communication.",
        18: "You are Isabelle, a French English teacher from Paris. You speak beautiful, careful English with a charming French accent. You are empathetic to language learners.",
        19: "You are Sofia, working for an international organization in Geneva. You are idealistic and a skilled debater. You speak clear, persuasive English, ideal for practicing for exams like IELTS or TOEFL.",
        20: "You are Grandpa George from the British countryside. You are a kind, patient old man who speaks very slowly and clearly. You are a great listener and perfect for beginners who lack confidence.",
    };

    // --- DOM要素の取得 ---
    const charSelectionScreen = document.getElementById('character-selection-screen');
    const conversationScreen = document.getElementById('conversation-screen');
    const backButton = document.getElementById('back-button');
    const partnerAvatar = document.getElementById('partner-avatar');
    const partnerName = document.getElementById('partner-name');
    const chatLog = document.getElementById('chat-log');
    const loadingIndicator = document.querySelector('.loading-indicator');
    const chatInputArea = document.getElementById('chat-input-area');
    const toggleInputButton = document.getElementById('toggle-input-button');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');
    const micButton = document.getElementById('mic-button');
    const micStatus = document.getElementById('mic-status');
    
    const viewGridBtn = document.getElementById('view-grid-btn');
    const viewMapBtn = document.getElementById('view-map-btn');
    const characterGrid = document.getElementById('character-grid');
    const characterMapContainer = document.getElementById('character-map-container');
    const tabsContainer = document.querySelector('.tabs');
    const tabs = document.querySelectorAll('.tab-button');
    let mapTooltip;

    // --- 音声関連のセットアップ ---
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    let recognition;
    let isListening = false;
    let voices = [];

    if (SpeechRecognition) {
        recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.lang = 'en-US';
        recognition.interimResults = true;
    } else {
        console.error("Speech Recognition not supported.");
        if(micButton) micButton.disabled = true;
        if(toggleInputButton) toggleInputButton.disabled = true;
        if(micStatus) micStatus.textContent = "Voice input not supported.";
    }

    function loadVoices() {
        voices = speechSynthesis.getVoices();
        if(voices.length === 0 && speechSynthesis.onvoiceschanged !== null) {
            speechSynthesis.addEventListener('voiceschanged', loadVoices, { once: true });
        }
    }
    loadVoices();

    let currentPartner = null;
    let chatHistory = [];
    let currentInputMode = 'voice';
    let currentViewMode = 'grid';
    let currentFilter = 'all';

    // --- 関数定義 ---
    
    function setViewMode(mode) {
        currentViewMode = mode;
        if (mode === 'grid') {
            characterGrid.classList.remove('hidden');
            tabsContainer.classList.remove('hidden');
            characterMapContainer.classList.add('hidden');
            viewGridBtn.classList.add('active');
            viewMapBtn.classList.remove('active');
        } else { // mode === 'map'
            characterGrid.classList.add('hidden');
            tabsContainer.classList.add('hidden');
            characterMapContainer.classList.remove('hidden');
            viewMapBtn.classList.add('active');
            viewGridBtn.classList.remove('active');
        }
        displayCharacters();
    }

    function displayCharacters() {
        if (currentViewMode === 'grid') {
            displayCharactersOnGrid();
        } else {
            displayCharactersOnMap();
        }
    }
    
    function displayCharactersOnGrid() {
        characterGrid.innerHTML = '';
        const filtered = currentFilter === 'all' ? characters : characters.filter(c => c.category === currentFilter);
        filtered.forEach(character => {
            const card = document.createElement('div');
            card.className = 'character-card';
            card.dataset.id = character.id;
            card.innerHTML = `<img src="${character.avatar}" alt="${character.name}" onerror="this.onerror=null;this.src='https://placehold.co/150x150?text=Error';"><h3>${character.name}</h3><p>${character.location}</p>`;
            characterGrid.appendChild(card);
        });
    }
    
    function displayCharactersOnMap() {
        characterMapContainer.querySelectorAll('.map-pin').forEach(pin => pin.remove());
        // ★ マップ表示では常に全キャラクターを表示
        characters.forEach(character => {
            const pin = document.createElement('div');
            pin.className = 'map-pin';
            pin.dataset.id = character.id;
            pin.style.top = character.map_pos.top;
            pin.style.left = character.map_pos.left;
            characterMapContainer.appendChild(pin);
        });
    }

    function selectCharacter(id) {
        currentPartner = characters.find(c => c.id === id);
        if (!currentPartner) return;
        partnerAvatar.src = currentPartner.avatar;
        partnerName.textContent = currentPartner.name;
        chatLog.querySelectorAll('.chat-message:not(.loading-indicator)').forEach(el => el.remove());
        currentInputMode = 'voice';
        updateInputUI();
        const systemPrompt = systemPrompts[currentPartner.id] || "You are a friendly English conversation partner.";
        chatHistory = [ { role: "system", parts: [{ text: systemPrompt }] }, { role: "model", parts: [{ text: currentPartner.greeting }] } ];
        addMessageToChat('ai', currentPartner.greeting); 
        speak(currentPartner.greeting, currentPartner.lang);
        charSelectionScreen.classList.remove('active');
        conversationScreen.classList.add('active');
    }

    function goBack() {
        speechSynthesis.cancel();
        if (isListening) recognition.stop();
        conversationScreen.classList.remove('active');
        charSelectionScreen.classList.add('active');
        currentPartner = null;
        chatHistory = [];
    }
    
    function addMessageToChat(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.className = `chat-message ${sender === 'user' ? 'user-message' : 'ai-message'}`;
        messageElement.textContent = message;
        chatLog.insertBefore(messageElement, loadingIndicator);
        chatLog.scrollTop = chatLog.scrollHeight; 
    }

    async function processMessage(messageText) {
        if (messageText === '' || loadingIndicator.style.display === 'block') return;
        addMessageToChat('user', messageText);
        chatHistory.push({ role: "user", parts: [{ text: messageText }] });
        loadingIndicator.style.display = 'block';
        chatLog.scrollTop = chatLog.scrollHeight;
        try {
            const aiReply = await getAiResponse(chatHistory);
            addMessageToChat('ai', aiReply);
            speak(aiReply, currentPartner.lang);
            chatHistory.push({ role: "model", parts: [{ text: aiReply }] });
        } catch (error) {
            console.error("AI Response Error:", error);
            const errorMessage = "Sorry, I'm having a little trouble right now. Please try again later.";
            addMessageToChat('ai', errorMessage);
            speak(errorMessage, 'en-US');
        } finally {
            loadingIndicator.style.display = 'none';
        }
    }

    function speak(text, langCode) {
        speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        let selectedVoice = voices.find(voice => voice.lang === langCode);
        if (!selectedVoice) selectedVoice = voices.find(voice => voice.lang.startsWith(langCode.split('-')[0]));
        if (!selectedVoice) selectedVoice = voices.find(voice => voice.lang.startsWith('en'));
        utterance.voice = selectedVoice;
        utterance.lang = selectedVoice ? selectedVoice.lang : 'en-US';
        utterance.onstart = () => { micButton.classList.add('disabled'); micStatus.textContent = 'AIがお話し中です...'; };
        utterance.onend = () => { micButton.classList.remove('disabled'); updateInputUI(); };
        speechSynthesis.speak(utterance);
    }

    async function getAiResponse(history) {
        if (!apiKey) throw new Error("API key is missing.");
        const payload = { contents: history.slice(1) };
        if (history[0].role === 'system') {
          payload.systemInstruction = { parts: history[0].parts };
        }
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        if (!response.ok) {
            const errorBody = await response.json();
            throw new Error(`API request failed: ${errorBody.error.message}`);
        }
        const result = await response.json();
        if (result.candidates?.[0]?.content?.parts?.[0]?.text) {
            return result.candidates[0].content.parts[0].text;
        }
        return "I'm not sure what to say.";
    }

    function updateInputUI() {
        if (currentInputMode === 'voice') {
            chatInputArea.classList.add('mode-voice');
            chatInputArea.classList.remove('mode-text');
            micStatus.textContent = 'マイクモード (クリックして話す)';
            toggleInputButton.title = 'テキスト入力に切り替え';
        } else {
            chatInputArea.classList.add('mode-text');
            chatInputArea.classList.remove('mode-voice');
            micStatus.textContent = 'テキスト入力モード';
            toggleInputButton.title = '音声入力に切り替え';
        }
    }

    function toggleInputMode() {
        currentInputMode = (currentInputMode === 'voice') ? 'text' : 'voice';
        if (isListening) recognition.stop();
        speechSynthesis.cancel();
        updateInputUI();
    }

    function createMapTooltip() {
        mapTooltip = document.createElement('div');
        mapTooltip.className = 'map-tooltip';
        characterMapContainer.appendChild(mapTooltip);

        characterMapContainer.addEventListener('mouseover', (e) => {
            const pin = e.target.closest('.map-pin');
            if (!pin) return;
            const char = characters.find(c => c.id === Number(pin.dataset.id));
            if (!char) return;
            mapTooltip.innerHTML = `<img src="${char.avatar}"><span>${char.name}</span>`;
            mapTooltip.style.top = pin.style.top;
            mapTooltip.style.left = pin.style.left;
            mapTooltip.classList.add('visible');
        });
        characterMapContainer.addEventListener('mouseout', (e) => {
            if (e.target.closest('.map-pin')) {
                mapTooltip.classList.remove('visible');
            }
        });
    }

    // --- イベントリスナー ---
    
    characterGrid.addEventListener('click', (e) => {
        const card = e.target.closest('.character-card');
        if (card) selectCharacter(Number(card.dataset.id));
    });

    characterMapContainer.addEventListener('click', (e) => {
        const pin = e.target.closest('.map-pin');
        if (pin) selectCharacter(Number(pin.dataset.id));
    });

    viewGridBtn.addEventListener('click', () => setViewMode('grid'));
    viewMapBtn.addEventListener('click', () => setViewMode('map'));

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentFilter = tab.dataset.category;
            displayCharacters();
        });
    });

    backButton.addEventListener('click', goBack);
    toggleInputButton.addEventListener('click', toggleInputMode);
    sendButton.addEventListener('click', () => { processMessage(userInput.value.trim()); userInput.value = ''; });
    userInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') { processMessage(userInput.value.trim()); userInput.value = ''; } });
    
    if (recognition) {
        micButton.addEventListener('click', () => {
            if (micButton.classList.contains('disabled')) return;
            if (isListening) {
                recognition.stop();
                return;
            }
            isListening = true;
            micButton.classList.add('listening');
            micStatus.textContent = 'お話しください...';
            let finalTranscript = '';
            recognition.onresult = (event) => {
                let interimTranscript = '';
                for (let i = event.resultIndex; i < event.results.length; ++i) {
                    if (event.results[i].isFinal) finalTranscript += event.results[i][0].transcript;
                    else interimTranscript += event.results[i][0].transcript;
                }
                micStatus.textContent = finalTranscript + interimTranscript;
            };
            recognition.onend = () => {
                isListening = false;
                micButton.classList.remove('listening');
                if (!speechSynthesis.speaking) updateInputUI();
                if (finalTranscript.trim()) processMessage(finalTranscript.trim());
            };
            recognition.onerror = (event) => {
                isListening = false;
                micButton.classList.remove('listening');
                console.error('Speech recognition error', event.error);
                let errorMessage = `エラー: ${event.error}`;
                if (event.error === 'not-allowed' || event.error === 'service-not-allowed') errorMessage = "マイクの使用が許可されていません。";
                else if (event.error === 'no-speech') errorMessage = "音声が検出されませんでした。";
                micStatus.textContent = errorMessage;
                setTimeout(() => { if (!isListening && !speechSynthesis.speaking) updateInputUI(); }, 3000);
            };
            recognition.start();
        });
    }

    // --- 初期化処理 ---
    if (!apiKey) alert("APIキーが設定されていません。js/script.jsファイルでAPIキーを設定してください。");
    setViewMode('grid');
    createMapTooltip();
});
