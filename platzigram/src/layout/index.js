var yo = require('yo-yo')
var translate = require('../translate')

module.exports = function (content){
    return yo`<div class="content">
            ${content}
        </div>` 
}