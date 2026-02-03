const scriptURL = 'https://script.google.com/macros/s/AKfycbzwWw7i7S-SUtLobjw7RiesfmBPVfQZ5JR0j7kGTG4wDtHX8rvAp_IwBQN3jXHRrW2eEA/exec'
        const form = document.forms['Messages-From-My-Website']
        const msg = document.getElementById('msg')

        form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then(response => response.json())
                .then(response => {
                    msg.innerHTML = 'Message sent successfully'
                    setTimeout(function(){
                        msg.innerHTML = ''
                    },5000)
                    form.reset()
                })
                .catch(error => console.error('Error!', error.message))
        })