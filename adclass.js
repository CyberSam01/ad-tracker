class AdvertisingChannel {
    constructor(data) {
        Object.assign(this, data)
        this.site = data.site
        this.adViews = data.adViews
        this.clicks = data.clicks
        this.conversions = data.conversions
    }
    logData() {
        console.log( this.site,
        this.adViews,
        this.clicks,
        this.conversions)
    }
    conversionRate() {
        return (this.conversions / this.clicks * 100).toFixed(2)
    }
}

export default AdvertisingChannel
