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
    if (token) {
        jsonVar.Arguments.token = token;
    }
    if (collectionId) {
        jsonVar.Arguments.collectionId = collectionId;
    }
    if (collection_token) {
        jsonVar.Arguments.collection_token = collection_token;
    }
    if (noembed) {
        jsonVar.Arguments.noembed = "";
    }
    if (Object.keys(jsonVar.Arguments).length === 0) {
        console.log("No arguments there. Removing it");
        delete jsonVar.Arguments;
    }
    console.log(jsonVar.Arguments)
    return jsonVar;
}
$.urlParam = function (name) {
    var results = new RegExp("[\?&]" + name + "=([^&#]*)").exec(
        window.location.href
    );
    if (results == null) {
        return null;
    }
    return decodeURI(results[1]) || 0;
};
var jData = `{
              "Name": "",
              "DestinationType": "ImageUploader",
              "RequestURL": "",
              "FileFormName": "image",
              "Arguments": {
              },
              "URL": "$json:url$",
              "ThumbnailURL": "$json:thumb$",
              "DeletionURL": "$json:del_url$"
          }`;
var tmpData = JSON.parse(jData);
var subdomain = $.urlParam("subdomain");
var token = $.urlParam("token");
var collectionId = $.urlParam("collection");
var collection_token = $.urlParam("collection_token");
var noembed = $.urlParam("noembed");
if (subdomain === null) {
    console.log("No Subdomain Probaly the first Run.");
} else {
    subdomain = decodeURIComponent(subdomain);
    tmpData.RequestURL = subdomain;
    var subdomainParse = new URL(subdomain);
    tmpData = fillData(tmpData, subdomain = subdomain, token = token,collectionId=collectionId,collection_token=collection_token,noembed=noembed);
    var finalString = JSON.stringify(tmpData, null, "    ");
    console.log(finalString);
    var blob = new Blob([finalString], {
        type: "text/sxcu;charset=utf-8",
    });
    saveAs(blob, tmpData.Name + ".sxcu");

}
  //window.location.replace(document.referrer);