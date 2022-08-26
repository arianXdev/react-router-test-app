const books = [
	{
		id: "rec0LmJ5c6IO6LDoe",
		fields: {
			Title: "Happiness is Possible",
			Author: "Oleg Zaionchkovski",
			Country: "Russia",
			Amazon_Link: "https://www.amazon.com/Happiness-Possible-Oleg-Zaionchkovsky/dp/1908276096?tag=pueblocolab-20",
		},
	},
	{
		id: "rec0M4i1sB2x0vka5",
		fields: {
			Title: "The House of the Spirits",
			Author: "Isabel Allende",
			Country: "Chile",
			Amazon_Link: "https://www.amazon.com/House-Spirits-Novel-Isabel-Allende/dp/1501117017?tag=pueblocolab-20",
		},
	},
	{
		id: "rec0N5H066JQdxZUD",
		fields: {
			Title: "Watermelon",
			Author: "Christy LefteriA",
			Country: "Cyprus",
			Amazon_Link: "https://www.amazon.com/Watermelon-Marian-Keyes/dp/0060090367?tag=pueblocolab-20",
		},
	},
	{
		id: "rec0Y80xOaJqUpbsL",
		fields: {
			Title: "Deep Rivers",
			Author: "Jose Maria Arguedas",
			Country: "Peru",
			Amazon_Link: "https://www.amazon.com/Deep-River-Karl-Marlantes/dp/0802125387?tag=pueblocolab-20",
		},
	},
	{
		id: "rec0e4OBkbbu8vs97",
		fields: {
			Title: "A Cowrie of Hope",
			Author: "Binwell Sinyangwe",
			Country: "Zambia",
			Amazon_Link: "https://www.amazon.com/Cowrie-Hope-African-Writers/dp/043591202X?tag=pueblocolab-20",
		},
	},
	{
		id: "rec0ofuFi3w2nbyML",
		fields: {
			Title: "Gregory and other stories",
			Author: "Panos Ioannides",
			Country: "Cyprus",
			Amazon_Link: "https://www.amazon.com/Gregory-Other-Stories-Panos-Ioannides/dp/9963620728?tag=pueblocolab-20",
		},
	},
	{
		id: "rec12TpdM0XjBWS0K",
		fields: {
			Title: "The Quarry",
			Author: "Damon Galgut",
			Country: "South Africa",
			Amazon_Link: "https://www.amazon.com/gp/bookseries/B00CKC8AX0/ref=dp_st_1783290846?tag=pueblocolab-20",
		},
	},
	{
		id: "rec15GG5eu6yu1C6I",
		fields: {
			Title: "Don Quixote(trans. Edith Grossman)",
			Author: "Miguel de Cervantes",
			Country: "Spain",
			Amazon_Link: "https://www.amazon.com/Don-Quixote-Miguel-Cervantes/dp/0060934344?tag=pueblocolab-20",
		},
	},
	{
		id: "rec1NzDod6V0FcgCP",
		fields: {
			Title: "So Long a Letter",
			Author: " Mariama Bama",
			Country: "Senegal",
			Amazon_Link: "https://www.amazon.com/So-Long-Letter-Mariama-Ba/dp/1577668065?tag=pueblocolab-20",
		},
	},
	{
		id: "rec1UuvgQFhSt3lN0",
		fields: {
			Title: "Death in Danzig",
			Author: "Stefan Chwin",
			Country: "Poland",
			Amazon_Link: "https://www.amazon.com/Death-Danzig-Stefan-Chwin/dp/0151008051?tag=pueblocolab-20",
		},
	},
	{
		id: "rec1jJs1IBHn21cTs",
		fields: {
			Title: "The Arch and the Butterfly",
			Author: "Mohammed Achaari",
			Country: "Morocco",
			Amazon_Link: "https://www.amazon.com/Arch-Butterfly-Mohammed-Achaari/dp/9992179058?tag=pueblocolab-20",
		},
	},
	{
		id: "rec1rXtiwDb05YycD",
		fields: {
			Title: "Sabriya",
			Author: " Ulfat Idilbi",
			Country: "Syria",
			Amazon_Link: "https://www.amazon.com/Sabriya-Damascus-Bitter-Interlink-Fiction/dp/1566562546?tag=pueblocolab-20",
		},
	},
	{
		id: "rec1tdaddJrTCEGGO",
		fields: {
			Title: "The Garden of Evening Mists",
			Author: " Tan Twan Eng",
			Country: "Malaysia",
			Amazon_Link: "https://www.amazon.com/Garden-Evening-Mists-Tan-Twan/dp/1602861803?tag=pueblocolab-20",
		},
	},
	{
		id: "rec1zjuUKcwMUhQUm",
		fields: {
			Title: "Paint the Town Red",
			Author: "Brian Meeks",
			Country: "Jamaica",
			Amazon_Link: "https://www.amazon.com/Paint-Town-Red-Brian-Meeks/dp/1900715740?tag=pueblocolab-20",
		},
	},
	{
		id: "rec21vMC2k5UrESOR",
		fields: {
			Title: "Out Your Tongue",
			Author: "Ma JianStick",
			Country: "China",
			Amazon_Link: "https://www.amazon.com/Stick-Out-Your-Tongue-Jian/dp/070117806X?tag=pueblocolab-20",
		},
	},
	{
		id: "rec2EFzNVuaK4jeW1",
		fields: {
			Title: "from the Endz",
			Author: "Faiza GueneDreams",
			Country: "France",
			Amazon_Link: "https://www.amazon.com/Dreams-Endz-Faza-Gune/dp/0099512920?tag=pueblocolab-20",
		},
	},
	{
		id: "rec2O2qUiqbMlhBw9",
		fields: {
			Title: "Requiem for the Living",
			Author: "Alan Cherchesov",
			Country: "Russia",
			Amazon_Link: "https://www.amazon.com/Requiem-Living-Memoir-Jeff-Metcalf/dp/1607813866?tag=pueblocolab-20",
		},
	},
	{
		id: "rec2gGxk27pxCApFy",
		fields: {
			Title: "Samko Tále's Cemetery Book",
			Author: "Daniela Kapitánová ",
			Country: "Slovakia",
			Amazon_Link: "https://www.amazon.com/Samko-T%C3%A1les-Cemetery-Daniela-Kapit%C3%A1nov%C3%A1-ebook/dp/B00CVVH9DC?tag=pueblocolab-20",
		},
	},
	{
		id: "rec2tx4V2XIqeZEKu",
		fields: {
			Title: "Voices from Chernobyl",
			Author: "Svetlana Alexievich",
			Country: "Belarus",
			Amazon_Link: "https://www.amazon.com/Voices-Chernobyl-History-Nuclear-Disaster/dp/0312425848?tag=pueblocolab-20",
		},
	},
	{
		id: "rec31krGjsVW4k8Pa",
		fields: {
			Title: "The Shadow-Boxing Girl",
			Author: "Inka Parei",
			Country: "Germany",
			Amazon_Link: "https://www.amazon.com/Shadow-Boxing-Woman-German-List/dp/1906497958?tag=pueblocolab-20",
		},
	},
	{
		id: "rec3C8AiH1K1MKkub",
		fields: {
			Title: "Told by Starlight in Chad",
			Author: "Joseph Brahim Seid",
			Country: "Chad",
			Amazon_Link: "https://www.amazon.com/Told-Starlight-Chad-Joseph-Brahim/dp/1592210481?tag=pueblocolab-20",
		},
	},
	{
		id: "rec3EKW8AhyEAQrEd",
		fields: {
			Title: "A Guided Tour through the Museum of Communism",
			Author: "Slavenka Drakulic",
			Country: "Croatia",
			Amazon_Link: "https://www.amazon.com/Guided-Tour-Through-Museum-Communism/dp/0143118633?tag=pueblocolab-20",
		},
	},
	{
		id: "rec3Pynx4zEY7AwgV",
		fields: {
			Title: "Empress Orchid",
			Author: " Anchee Min",
			Country: "China",
			Amazon_Link: "https://www.amazon.com/Empress-Orchid-Anchee-Min/dp/B0024FAOQ4?tag=pueblocolab-20",
		},
	},
	{
		id: "rec3gQgwOkhOvGI7V",
		fields: {
			Title: "Illegal Liaisons",
			Author: "Grazyna Plebanek",
			Country: "Poland",
			Amazon_Link: "https://www.amazon.com/Illegal-Liaisons-Graznya-Plebanek/dp/0985062363?sa=X&ved=2ahUKEwjWwPa-ws3mAhXVHc0KHQTAAYcQ9QF6BAgKEAI?tag=pueblocolab-20",
		},
	},
	{
		id: "rec3k0WupWUd0Y0KP",
		fields: {
			Title: "A Free Man",
			Author: "Aman Sathi",
			Country: "India",
			Amazon_Link: "https://www.amazon.com/Free-Man-Story-Death-Delhi/dp/0393346609?tag=pueblocolab-20",
		},
	},
	{
		id: "rec3oM2KMHm1fNG1A",
		fields: {
			Title: "The Falafel King is Dead",
			Author: "Sara Shilo",
			Country: "Israel",
			Amazon_Link: "https://www.amazon.com/Falafel-King-Dead-Sara-Shilo/dp/184627222X?tag=pueblocolab-20",
		},
	},
	{
		id: "rec3tbNab3EMNOVMG",
		fields: {
			Title: "The Master and the Margarita",
			Author: " Mikhail Bulgakov",
			Country: "Russia",
			Amazon_Link: "https://www.amazon.com/Master-Margarita-Mikhail-Bulgakov/dp/0679760806?tag=pueblocolab-20",
		},
	},
	{
		id: "rec40CYJrmf5s0tHQ",
		fields: {
			Title: "The Long Way Back",
			Author: "Fuad al-Takarli",
			Country: "Iraq",
			Amazon_Link: "https://www.amazon.com/Long-Way-Back-Charley-Boorman/dp/0749578505?tag=pueblocolab-20",
		},
	},
	{
		id: "rec49T53nPRugQ6LU",
		fields: {
			Title: "AngueEkomo",
			Author: "Maria Nsue",
			Country: "Equatorial Guinea",
			Amazon_Link: "https://www.amazon.com/Kindle-Store/b?ie=UTF8&node=133140011?tag=pueblocolab-20",
		},
	},
	{
		id: "rec4Sy66oGq6gWkVL",
		fields: {
			Title: "By the Time She Returned",
			Author: "John Rusimbi",
			Country: "Rwanda",
			Amazon_Link: "https://www.amazon.com/Time-She-Returned-John-Rusimbi/dp/1857563921?tag=pueblocolab-20",
		},
	},
	{
		id: "rec4TGZo0vOEsUqPS",
		fields: {
			Title: "Fugitive Pieces",
			Author: "Anne Michaels",
			Country: "Canada",
			Amazon_Link: "https://www.amazon.com/Fugitive-Pieces-Novel-Anne-Michaels/dp/0679776591?tag=pueblocolab-20",
		},
	},
	{
		id: "rec4db7Oi3CZ3x6tg",
		fields: {
			Title: "Kenya, Will You Marry Me?",
			Author: "Philo Ikonya",
			Country: "Kenya",
			Amazon_Link: "https://www.amazon.com/Kenya-Will-You-Marry-Me/dp/9956579793?tag=pueblocolab-20",
		},
	},
	{
		id: "rec4xS2WeBUjOU4Kh",
		fields: {
			Title: "The Moon is Following Me",
			Author: "Cecil Browne",
			Country: "Saint Vincent and the Grenadines",
			Amazon_Link: "https://www.amazon.com/MOON-FOLLOWING-ME-Philip-Heckman/dp/0689315651?tag=pueblocolab-20",
		},
	},
	{
		id: "rec5CH3nDZ9cxRHCn",
		fields: {
			Title: "Moon Over Samarqand",
			Author: "Mohamed Mansi Qandil",
			Country: "Egypt",
			Amazon_Link: "https://www.amazon.com/Samarqand-Modern-Arabic-Literature-Hardcover/dp/9774161890?tag=pueblocolab-20",
		},
	},
	{
		id: "rec5HHMwd6hEMPhHE",
		fields: {
			Title: "We Killed Mangy Dog",
			Author: "Luis Bernardo Honwana",
			Country: "Mozambique",
			Amazon_Link: "https://www.amazon.com/Killed-Mangy-Dog-Stories-African-Writers/dp/0435900609?tag=pueblocolab-20",
		},
	},
	{
		id: "rec5Mj42i2eJGM5q5",
		fields: {
			Title: "Stone Upon Stone",
			Author: "Wieslaw Mysliwski",
			Country: "Poland",
			Amazon_Link: "https://www.amazon.com/Stone-Upon-Wieslaw-Mysliwski/dp/098262462X?tag=pueblocolab-20",
		},
	},
	{
		id: "rec5c9WIqg3oH2rXB",
		fields: {
			Title: "The Name of the Rose",
			Author: " Umberto Eco",
			Country: "Italy",
			Amazon_Link: "https://www.amazon.com/Name-Rose-Umberto-Eco/dp/0544176561?tag=pueblocolab-20",
		},
	},
];

// A function which returns a list of books.
export const getBooks = () => books;

export const getBook = (id) => {
	return books.find((book) => book.id == id); // returns the specifig book with the id
};
