// async function handleApi() {
//     const data = await fetch("https://api.iucnredlist.org/api/v4/population_trends/",{
//         headers : {
//             'accept' : '*/*',
//             'Authorization' : 'Rf3EwuUvmv4FDbDEA2H4romf9vU5VawwFJaW'
//         }
//     });

//     const jsonvalue = await data.json();
//     console.log(jsonvalue.population_trends);


// }

// handleApi();


async function handleApi() {
      const data = await fetch("https://api.iucnredlist.org/api/v4/assessment/214862019",{
          headers : {
            Accept: "application/json",
            Authorization : 'Rf3EwuUvmv4FDbDEA2H4romf9vU5VawwFJaW'
          }
      });
  
      const jsonvalue = await data.json();
      console.log(jsonvalue.taxon.scientific_name);
      console.log(jsonvalue.population_trend.description.en);
      console.log(jsonvalue.red_list_category.description.en);
  
      const fullObj = (jsonvalue.taxon.common_names.find(item => item.main === true));
      console.log(fullObj.name);


      console.log(jsonvalue.documentation.range);
      console.log(jsonvalue.documentation.population);
      console.log(jsonvalue.documentation.habitats);
      console.log(jsonvalue.documentation.threats);

  }
  
  handleApi();
  
  
  