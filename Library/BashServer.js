/*
Copyright (C) 2011 by Luke Young

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
function Bash(key){
    this.preurl = "http://localhost:5853/KEY/"+escape(key)+"/ENDKEY/";
    this.exec = function(command){
        var finalurl = this.preurl+escape(command);
        var result = "Error";
        $.ajax({
            async:false,
            url: finalurl,
            success: function(data){
                result = data;
            }
        });
        if(result=="Error"){
            throw{
                name: "ConnErr",
                message: "A Connection issue was detected. Please ensure that BashServer is installed and you have entered the correct password."
            }
        }else{
            return result;
        }
    }
}
