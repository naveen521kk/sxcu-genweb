/**
 * sxcu generator website
 * Copyright (C) 2020  Naveen M K
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
import 'bootstrap';
//import './scss/app.scss';
import { validate } from 'jquery-validation';
//import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

$("#mainform").validate({
    rules: {
        subdomain: {
            required: true,
            url: true,
            normalizer: function (value) {
                var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
                var regex = new RegExp(expression);
                var url = value;
                if (url.match(regex)) {
                    console.log(url);
                    return url;
                } else {
                    return "";
                }
            },
        },
        token: {
            required: false,
            normalizer: function (value) {
                return $.trim(value);
            },
        },
        collection: {
            required: false,
            normalizer: function (value) {
                return $.trim(value);
            },
        },
        collection_token: {
            required: false,
            normalizer: function (value) {
                return $.trim(value);
            },
        },
        noembed: {
            required: false,
            normalizer: function (value) {
                console.log(value)
                return value

            },
        }
    },
});
