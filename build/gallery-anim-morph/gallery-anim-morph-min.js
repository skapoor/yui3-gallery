YUI.add("gallery-anim-morph",function(a){YUI.add("gallery-anim-morph",function(c){var b=c.namespace("gallery.anim.morph");b.Morph=c.Base.create("gallery-anim-morph",c.Widget,[],{_animate:true,_perform_anim_morph:function(i,k,j){var h=this,g=k.getComputedStyle("height").replace("px",""),f=j.getComputedStyle("height");j.addClass("hidden");k.setStyle("opacity",0);k.removeClass("hidden");k.setStyle("height",f);var d=new c.Anim({node:k,to:{opacity:1},duration:1,easing:"easeIn"});var e=new c.Anim({node:k,to:{height:g},duration:0.5,easing:"easeOut"});e.on("end",function(){k.setStyle("height","auto");h.fire("morphed");});d.run();e.run();},initializer:function(d){if(c.Lang.isValue(d.animate)){this._animate=d.animate;}else{this._animate=true;}},morph:function(e){var h=this.get(e?"targetNode":"srcNode");var g=this.get(e?"srcNode":"targetNode");if(this._animate){var f=this,d=new c.Anim({node:g,to:{opacity:0},duration:0.2,easing:"easeOut"});d.on("end",this._perform_anim_morph,this,g,h);d.run();}else{g.addClass("hidden");h.removeClass("hidden");h.setStyle("height","auto");this.fire("morphed");}},reverse:function(){this.morph(true);}},{ATTRS:{targetNode:{value:null,setter:function(d){return c.one(d);}}}});},"0.1",{"requires":["anim","base","node","widget"]});},"gallery-2012.07.11-21-38",{requires:["anim","base","node","widget"],skinnable:false});