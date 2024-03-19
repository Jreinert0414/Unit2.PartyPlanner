const COHORT = "2402-FTB-ET-WEB-FT";
const API_URL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/${COHORT}/events`;
const webPage = document.querySelector(`ul`);
const state = [

]



const render = async () => { }

const getInfo = async () => {
  try {
    const response = await fetch(API_URL)
    const json = await response.json();
    state.events = json.data
  } catch (error) {
    console.log(`this dont work`);
  };

}
getInfo();

//put the names on webpage
const renderPage = async () => {
  await getInfo();
  renderArtist();
}
renderPage();


//render events from state
const renderArtist =async () => {
  const events = await getInfo();
  state.events.forEach((events) => {
    const liEvents = document.createElement("li");
    liEvents.innerHTML= `${events.name} at ${events.location} on
     ${events.date}`;
    document.querySelector(`ul`).appendChild(liEvents);
   });
 
  render();
};

