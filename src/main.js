import './styles/style.css'
import $ from 'jquery'

displayBanner()

// Display Banner
function displayBanner() {
  let userLoc = JSON.parse(httpGet('https://get.geojs.io/v1/ip/geo.json'))
  let userState = userLoc['region']
  console.log(userState)
  // if geo banner exists
  if ($('.section-banner-geo').length) {
    let bannerLoc = document.getElementById('bannerLoc').innerText
    if (userState == bannerLoc) {
      console.log('State match')
      //$('.section-banner-geo').show()
      $('.section-banner-geo').css('min-height', '54px')
      $('.section-banner-geo').css('opacity', '100%')

      $('.section-droppop').hide()
    }
  }
}

function httpGet(theUrl) {
  var xmlHttp = new XMLHttpRequest()
  xmlHttp.open('GET', theUrl, false) // false for synchronous request
  xmlHttp.send(null)
  return xmlHttp.responseText
}
