"use strict";
/**
 * Fill the JsonVar with the data.
 * @param  {Object} jsonVar Contains Data that need to be filled.
 * @param  {String}   token   Token ofupload SubDomain.
 * @param  {String}   subdomain   The subdomain Url.
 * @param  {String}   collectionId   The collectionId to upload.
 * @param  {String}   collection_token   The collection Token.
 * @param  {boolean}   noembed   Should embed or not.
 */
function fillData(
    jsonVar,
    subdomain,
    token,
    collectionId,
    collection_token,
    noembed = false
) {
    var b = subdomain;
    var subdomainHost = (b.endsWith('/')) ? (b.replace("https://", "").slice(0, -1)) : (b.replace("https://", ""))
    jsonVar.Name = "sxcu.net - " + subdomainHost;
    if (subdomain.endsWith("/")) {
        jsonVar.RequestURL = subdomain + "upload";
    } else {
        jsonVar.RequestURL = subdomain + "/upload";
    }
    if (token){
        jsonVar.Arguments.token = token;
    }
    if (collectionId){
        jsonVar.Arguments.collectionId = collectionId;
    }
    if (collection_token){
        jsonVar.Arguments.collection_token = collection_token;
    }
    if (noembed){
        jsonVar.Arguments.noembed = "";
    }
    if (Object.keys(jsonVar.Arguments).length === 0) {
        console.log("No arguments there. Removing it");
        delete jsonVar.Arguments;
    }
    console.log(jsonVar.Arguments)
    return jsonVar;
}
