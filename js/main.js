var thumbsSwiper = new Swiper(".background-slider-thumbs", {
	loop: true,
	spaceBetween: 0,
	slidesPerView: 0,
});

var mainSwiper = new Swiper(".background-slider", {
	loop: true,
	spaceBetween: 0,
	thumbs: {
		swiper: thumbsSwiper,
	},
	autoplay: {
		delay: 6000,
	},
	speed: 600,
});

const darkModeToggleIcon = document.getElementById('darkModeToggle');
const langBtn = document.getElementById('language-btn');
const langDropdown = document.querySelector('.language-dropdown');
const langOptions = document.querySelectorAll('.language-option');
const paragraphsToTranslate = document.querySelectorAll('.content-to-translate');
const readMoreButtons = document.querySelectorAll('.read-more');

function toggleDarkLightMode() {
	document.body.classList.toggle('light-mode');
	const isLightMode = document.body.classList.contains('light-mode');
	darkModeToggleIcon.classList.toggle('uil-sun', isLightMode);
	darkModeToggleIcon.classList.toggle('uil-moon', !isLightMode);
}

// languages
function updateContentBasedOnLanguage(language) {
	paragraphsToTranslate.forEach(paragraph => {
		switch (language) {
			case 'en':
				updateContent(paragraph, 'celeste', "Help Madeline survive her inner demons on her journey to the top of Celeste Mountain, in this super-tight platformer from the creators of TowerFall. Brave hundreds of hand-crafted challenges, uncover devious secrets, and piece together the mystery of the mountain.");
				updateContent(paragraph, 'hollow-knight', "Forge your own path in Hollow Knight! An epic action adventure through a vast ruined kingdom of insects and heroes. Explore twisting caverns, battle tainted creatures and befriend bizarre bugs, all in a classic, hand-drawn 2D style.");
				updateContent(paragraph, 'sally-face', "Delve into a dark adventure following the boy with a prosthetic face and a tragic past. Unravel the sinister mysteries of Sally's world to find the truth that lies hidden beneath the shadows.");
				updateContent(paragraph, 'ori-wotw', "Play the critically acclaimed masterpiece. Embark on a new journey in a vast, exotic world where you’ll encounter towering enemies and challenging puzzles on your quest to unravel Ori’s destiny.");
				break;
			case 'fr':
				updateContent(paragraph, 'celeste', "Aidez Madeline à survivre à ses démons intérieurs au mont Celeste, dans ce jeu de plateformes ultra relevé, réalisé par les créateurs du classique TowerFall. Relevez des centaines de défis faits à la main, découvrez tous les secrets et dévoilez le mystère de la montagne.");
				updateContent(paragraph, 'hollow-knight', "Choisissez votre destin dans Hollow Knight ! Une aventure épique et pleine d’action, qui vous plongera dans un vaste royaume en ruine peuplé d’insectes et de héros. Dans un monde en 2D classique, dessiné à la main.");
				updateContent(paragraph, 'sally-face', "Plongez dans une aventure sombre en suivant un garçon au visage prothétique et au passé tragique. Démêlez les sinistres mystères du monde de Sally pour trouver la vérité qui se cache sous l’ombre.");
				updateContent(paragraph, 'ori-wotw', "Embarquez pour une nouvelle aventure dans un monde vaste et dépaysant où vous rencontrerez des ennemis gigantesques et des énigmes ardues dans votre quête pour révéler la destinée d'Ori.");
				break;
			case 'de':
				updateContent(paragraph, 'celeste', "Hilf Madeline in dem reaktionsschnellen Plattformer der Macher von TowerFall, beim Besteigen des Celeste ihre inneren Dämonen zu bezwingen! Bestehe Hunderte kniffliger Herausforderungen, entdecke verschlungene Geheimnisse und enträtsele das Mysterium des Berges.");
				updateContent(paragraph, 'hollow-knight', "Bahne dir in Hollow Knight, einem epischen Action-Adventure, deinen eigenen Weg durch ein riesiges Königreich voller Insekten und Helden. Erkunde verwinkelte Höhlen, kämpfe gegen verdorbene Kreaturen und mache dir bizarre Käfer zu deinen Verbündeten.");
				updateContent(paragraph, 'sally-face', "Folge dem Jungen mit dem prothetischen Gesicht und einer dunklen Vergangenheit in ein neues Abenteuer. Lüfte die schrecklichen Geheimnisse in Sallys Geschichte und entdecke die Wahrheit hinter den Schatten.");
				updateContent(paragraph, 'ori-wotw', "Begib dich auf eine abenteuerliche Reise durch eine riesige, exotische Welt voller gigantischer Gegner und anspruchsvoller Rätsel, um das Rätsel um Oris wahre Bestimmung zu lüften.");
				break;
		}
	});

	readMoreButtons.forEach(button => {
		const iconHTML = button.querySelector('i').outerHTML;
		switch (language) {
			case 'en':
				button.innerHTML = 'Read More ' + iconHTML;
				break;
			case 'fr':
				button.innerHTML = 'En Savoir Plus ' + iconHTML;
				break;
			case 'de':
				button.innerHTML = 'Mehr lesen ' + iconHTML;
				break;
		}
	});
}

// update single content element
function updateContent(element, game, text) {
	if (element.dataset.game === game) {
		element.innerText = text;
	}
}

// close dropdown
function closeLanguageDropdown(event) {
	if (!langDropdown.contains(event.target) && !langBtn.contains(event.target)) {
		langDropdown.classList.remove('active');
	}
}

function toggleLanguageDropdown() {
	langDropdown.classList.toggle('active');
}

function setInitialDarkModeIcon() {
	darkModeToggleIcon.classList.add(document.body.classList.contains('light-mode') ? 'uil-sun' : 'uil-moon');
}

// event listeners
document.addEventListener('DOMContentLoaded', function() {
	setInitialDarkModeIcon();
	darkModeToggleIcon.addEventListener('click', toggleDarkLightMode);
	langBtn.addEventListener('click', toggleLanguageDropdown);
	document.addEventListener('click', closeLanguageDropdown);

	langOptions.forEach(option => {
		option.addEventListener('click', function() {
			const selectedLanguage = this.dataset.lang;
			updateContentBasedOnLanguage(selectedLanguage);
			langBtn.innerText = selectedLanguage.toUpperCase();
			langDropdown.classList.remove('active');
		});
	});
});

document.querySelector('a[href="#misc"]').addEventListener('click', function(e) {
	e.preventDefault();

	const targetSection = document.getElementById('misc');
	const offset = targetSection.offsetTop;
	const scrollOptions = {
		top: offset,
		behavior: 'smooth'
	};

	window.scrollTo(scrollOptions);
});

document.querySelector('a[href="#"]').addEventListener('click', function(e) {
	e.preventDefault();

	const scrollOptions = {
		top: 0,
		behavior: 'smooth'
	};

	window.scrollTo(scrollOptions);
});