const DUMMY_DATA = [
  { id: "d1", value: 10, region: "USA" },
  { id: "d2", value: 11, region: "India" },
  { id: "d3", value: 12, region: "China" },
  { id: "d4", value: 6, region: "Germany" },
]; // JSON notation, I think

// d3.select("div") //select div element
//   .selectAll("p") //select all paragraph elements within this div
//   .data([1, 2, 3]) //bind all the paragraphs to this data
//   .enter() //tell me which paragraphs are missing; "enter" contains info. about the "free" elements (the non-existent elements that are not bound to the data yet)
//   .append("p") //for every missing element, add a paragraph
//   .text((data_pt) => data_pt); //data_pt is parameter that allows me to access the data point bound to each element

// //each "p" will have one entry from this array

// d3.select("div") //select div element
//   .selectAll("p") //select all paragraph elements within this div
//   .data(DUMMY_DATA) //bind all the paragraphs to this data
//   .enter() //tell me which paragraphs are missing; "enter" contains info. about the "free" elements (the non-existent elements that are not bound to the data yet)
//   .append("p") //for every missing element, add a paragraph
//   .text((data_pt) => data_pt.region); //data_pt is parameter that allows me to access the data point bound to each element

//each "p" will have one entry from this array

//.style() for inline styling
//.classed() to attach CSS classes to
const container = d3
  .select("div") //div selector
  .classed("container", true) //true needed to see whether to add the class or not
  .style("border", "1px solid red");

const bars = container //within the surface-level div element
  .selectAll(".bar") //select all class="bar" attribute elements
  .data(DUMMY_DATA) //bind them to DUMMY_DATA (which has four elements)
  .enter() //so gather the 4 missing elements
  .append("div") //make each element a div
  .classed("bar", true) //classify each one as "bar" (i.e., class="bar")
  .style("width", "50px") //set the width to 150 px
  //   .style("height", "150px"); //set the height to 150 px
  .style("height", (data) => data.value * 15 + "px"); //from DUMMY_DATA
