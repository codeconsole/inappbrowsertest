/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');

    $('button#DOCS').click(app.open)
    $('input.color-picker').spectrum({
        allowEmpty: true
    });
}

var app = {
    input: function(name) {
        return this.val('input', name)
    },
    select: function(name) {
        return this.val('select', name)
    },
    val: function(type, name) {
        val = $('#InAppBrowser '+type+'[name='+name+']').val()
        return val? name+'='+val : null
    },    
    open: function() {
        var params = []
        var opts = $('#InAppBrowser').find('select, input').toArray()
        for (var i in opts) {
            if ($(opts[i]).val()) {
                params.push($(opts[i]).attr('name')+'='+$(opts[i]).val())
            }   
        }
        alert(params.join(','))
        cordova.InAppBrowser.open('https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-inappbrowser/index.html','_blank',
            params.join(','));
        return false;
    }
}

