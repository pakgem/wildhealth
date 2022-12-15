import './styles/style.css'
import $ from 'jquery'

displayBanner()

// Display Banner
function displayBanner() {
  let userLoc = JSON.parse(httpGet('https://get.geojs.io/v1/ip/geo.json'))
  let userState = getStateAcronym(userLoc['region'])
  // if geo banner exists
  if ($('.section-banner-geo').length) {
    let bannerLocStr = document.getElementById('bannerLoc').innerText
    let locItems = splitString(bannerLocStr)

    // if user's state exists in the the state list set in banner settings
    if (locItems.includes(userState)) {
      $('.section-banner-geo').css('height', '3.5rem')
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

function getStateAcronym(stateName) {
  // Create an object that maps state names to their acronyms
  const stateAcronyms = {
    Alabama: 'AL',
    Alaska: 'AK',
    Arizona: 'AZ',
    Arkansas: 'AR',
    California: 'CA',
    Colorado: 'CO',
    Connecticut: 'CT',
    Delaware: 'DE',
    Florida: 'FL',
    Georgia: 'GA',
    Hawaii: 'HI',
    Idaho: 'ID',
    Illinois: 'IL',
    Indiana: 'IN',
    Iowa: 'IA',
    Kansas: 'KS',
    Kentucky: 'KY',
    Louisiana: 'LA',
    Maine: 'ME',
    Maryland: 'MD',
    Massachusetts: 'MA',
    Michigan: 'MI',
    Minnesota: 'MN',
    Mississippi: 'MS',
    Missouri: 'MO',
    Montana: 'MT',
    Nebraska: 'NE',
    Nevada: 'NV',
    'New Hampshire': 'NH',
    'New Jersey': 'NJ',
    'New Mexico': 'NM',
    'New York': 'NY',
    'North Carolina': 'NC',
    'North Dakota': 'ND',
    Ohio: 'OH',
    Oklahoma: 'OK',
    Oregon: 'OR',
    Pennsylvania: 'PA',
    'Rhode Island': 'RI',
    'South Carolina': 'SC',
    'South Dakota': 'SD',
    Tennessee: 'TN',
    Texas: 'TX',
    Utah: 'UT',
    Vermont: 'VT',
    Virginia: 'VA',
    Washington: 'WA',
    'West Virginia': 'WV',
    Wisconsin: 'WI',
    Wyoming: 'WY',
  }

  // Return the acronym for the given state, if it exists
  return stateAcronyms[stateName] || null
}

function splitString(str) {
  // Split the string into an array of items separated by a comma
  const items = str.split(', ')
  // Return the array of items
  return items
}

$(document).ready(function () {
  if (document.referrer.indexOf(window.location.hostname) != -1) {
    var referrer = document.referrer
    console.log(referrer)
  }
})
