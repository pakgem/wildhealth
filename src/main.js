import './styles/style.css'
import $ from 'jquery'

displayBanner()

// Display Banner
function displayBanner() {
  let userLoc = JSON.parse(httpGet('https://get.geojs.io/v1/ip/geo.json'))
  let userState = userLoc['region'].toLowerCase()
  // if geo banner exists
  if ($('.section-banner-geo').length) {
    let bannerLoc = document.getElementById('bannerLoc').innerText.toLowerCase()
    // if user's state matches the state set in banner
    if (bannerLoc.indexOf(userState != -1)) {
      $('.section-banner-geo').css('height', 'auto')
      $('.section-banner-geo').css('opacity', '100%')
      $('.section-droppop, .section-banner').remove()
    }
  }
}

function httpGet(theUrl) {
  var xmlHttp = new XMLHttpRequest()
  xmlHttp.open('GET', theUrl, false) // false for synchronous request
  xmlHttp.send(null)
  return xmlHttp.responseText
}
