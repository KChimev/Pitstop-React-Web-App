export default function findResults(database, search, results) {
  results.current = []
  for (const brand in database.make) {
    database.make[brand].forEach((element) => {
      if (brand === search.make || search.make === 'All') {
        if (element.model === search.model || search.model === 'All') {
          if (element.body === search.body || search.body === 'All') {
            if (
              element.condition === search.condition ||
              search.conditon === 'All'
            ) {
              results.current.push({ brand: brand, model: element })
            }
          }
        }
      }
    })
  }
}
