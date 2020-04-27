import React from 'react';

var mapStatus = {level:"Province"};
var loadPortion = true;
var thisfeature = null;
var blockZoom = false;
var isLoading = {};
var orderedtables = {};
var thise = null;
var parente = null;
var focuscolor = 'purple';
var helpMessage = '';
var opacity_value = 0.6;
var clickedprops = null;
var adLookup = {};
var gndLookup = {};
var colorList = ['#660000','#800026','#BD0026','#E31A1C','#FC4E2A','#FD8D3C','#FEB24C','#FED976','#fFEDa0','#ffffcc'];
var edge_weight = 1.5;
/* Where will we hold the active layer? */
var topoLayer = {};
var maplayers = {};
var vardata = {};
/* for speedy loading of the indicator data ("vardata") */
var retainVarData = false;