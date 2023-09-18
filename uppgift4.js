function find(text, search){
if(text.includes(search) == true)
{return (console.log(`the sentence includes ${search}`))}
if(text.includes(search) !== true)
{return (console.log(`the sentence does not include ${search}`))}
}
console.log(find("detta är en mening", "ö"));