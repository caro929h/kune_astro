// https://xnxgitagsngxibomplmc.supabase.co
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhueGdpdGFnc25neGlib21wbG1jIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzkwNTMyNjcsImV4cCI6MTk5NDYyOTI2N30.AJfZquFwCqKVXMLFNHaxoi_zanrT7MVwiRwzsAfVyFU

fetch("https://xnxgitagsngxibomplmc.supabase.co/rest/v1/KUNE?select=name,date,scene,image", {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhueGdpdGFnc25neGlib21wbG1jIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzkwNTMyNjcsImV4cCI6MTk5NDYyOTI2N30.AJfZquFwCqKVXMLFNHaxoi_zanrT7MVwiRwzsAfVyFU",
  },
})
  .then((res) => res.json())
  .then(showData);

function showData(items) {
  console.log(items);
  //items.forEach()
}
