if (document.querySelector('#address')) {

  const sampleKey = 21102174564513388;

  const addressList = document.querySelector('#address_list');

  document.querySelector('#address').addEventListener('input', e => {
    let target = e.target.value;

    // fetch(`https://us-autocomplete-pro.api.smartystreets.com/suggest?auth-id=${key}&prefix=${target}`, {
    //   method: "GET",
    //   headers: {
    //     "Host": "https://www.attsavings.com",
    //   }
    // })

    fetch(`https://us-autocomplete.api.smartystreets.com/suggest?auth-id=${sampleKey}&prefix=${target}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      addressList.innerHTML = "";

      console.log(data);
      data.suggestions.forEach(address => {
        let option = document.createElement('option');
        option.value = address.text;

        addressList.appendChild(option);
      })

    })
    .catch(error => console.log(error));

  })
}