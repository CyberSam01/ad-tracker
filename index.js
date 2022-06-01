import AdvertisingChannel from "./adclass.js"
import adData from "./data.js"

const fb = document.getElementById("fb")
const twit = document.getElementById("twit")
const insta = document.getElementById("insta")

const fbData = new AdvertisingChannel(adData.facebook)
const twitData = new AdvertisingChannel(adData.twitter)
const instaData = new AdvertisingChannel(adData.instagram)

fb.innerHTML = `<div class="site-name">${fbData.site}</div>
			<div>Views: ${fbData.adViews}</div>
			<div>Clicks: ${fbData.clicks}</div>
			<div>Conversions: ${fbData.conversions}</div>
			<div>Conv. Rate: <span class="highlight">${fbData.conversionRate()}%</span></div>`
            
twit.innerHTML = `<div class="site-name">${twitData.site}</div>
			<div>Views: ${twitData.adViews}</div>
			<div>Clicks: ${twitData.clicks}</div>
			<div>Conversions: ${twitData.conversions}</div>
			<div>Conv. Rate: <span class="highlight">${twitData.conversionRate()}%</span></div>`
            
insta.innerHTML = `<div class="site-name">${instaData.site}</div>
			<div>Views: ${instaData.adViews}</div>
			<div>Clicks: ${instaData.clicks}</div>
			<div>Conversions: ${instaData.conversions}</div>
			<div>Conv. Rate: <span class="highlight">${instaData.conversionRate()}%</span></div>`
