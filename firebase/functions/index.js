const functions = require('firebase-functions')
const {dialogflow} = require('actions-on-google')
const WELCOME_INTENT = 'Default Welcome Intent'
const FALLBACK_INTENT = 'Default Fallback Intent'
const NEED_LOCATION_INTENT = 'Need Location'
const NEED_SERVICE_INTENT = 'Need Service'
const NEED_SUPPORT_INTENT = 'Need Support'
const NEED_NAME_INTENT = 'Need Name'
const NEED_AGE_INTENT = 'Need Age'
const SERVICE_TYPE_ENTITY = 'TypeOfService'
const LOCATION_TYPE_ENTITY = 'TypeOfLocation'
const AGE_TYPE_ENTITY = 'TypeOfAge'
const NAME_TYPE_ENTITY = 'TypeOfName'
const SUPPORT_TYPE_ENTITY = 'TypeOfSupport'

const app = dialogflow()

app.intent(WELCOME_INTENT, (conv) => {
    conv.ask("Hello! What's your name?")
})


app.intent(NEED_NAME_INTENT,(conv) => {
    const name_type = conv.parameters(NAME_TYPE_ENTITY).toLowerCase();
        if(name_type == "Peter"){
        conv.ask("Sweet! How old are you?")
        } 
    })


app.intent(NEED_AGE_INTENT,(conv) => {
    const age_type = conv.parameters(AGE_TYPE_ENTITY).toLowerCase();
    if(age_type == "28"){
        conv.ask("Nice! Where do you live?")
    }
})

app.intent(NEED_LOCATION_INTENT, (conv) => {
    const loc_type = conv.parameters(LOCATION_TYPE_ENTITY).toLowerCase();
    if(loc_type == "Edinburgh") {
         conv.ask("And what kind of help would you like?")
    }
})

app.intent(NEED_SUPPORT_INTENT, (conv) => {
    const support_type = conv.parameters(SUPPORT_TYPE_ENTITY).toLowerCase();
    if(support_type == "Support in person") {
         conv.ask("And how are you feeling?")
    }
})


    app.intent(NEED_SERVICE_INTENT, (conv) => {
        const sevice_type = conv.parameters(SERVICE_TYPE_ENTITY).toLowerCase();
        if(service_type == "depressed") {
            conv.ask("then you should try this")
            conv.ask( "http://www.health-in-mind.org.uk/services/support_from_home/d8/")
        }
        else if(service_type == "stressed"){
            conv.ask("then you should try this")
        }
        else if(service_type == "anxious"){
            conv.ask("then you should try this")
        }
        else if(service_type == "marginalised"){
            conv.ask("then you should try this")
        }
        else if(service_type == "isolated"){
            conv.ask("then you should try this")
        }
    })
    
    app.intent(FALLBACK_INTENT, (conv) => {
    conv.ask("I am sorry to hear that! Please contact the emergency lines below")
})

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app)

