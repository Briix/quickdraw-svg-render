function quickdrawSvgRender(drawing, viewBox) {
  viewBox = (typeof viewBox !== 'undefined') ? viewBox : true

  var svgSize = viewBox ? 'viewBox="0 0 256 256"' : 'width="256"  height="256"'
  var svg = []
  svg.push('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"' + svgSize + '>')

  drawing.forEach(function(loops) {
    svg.push('<path d="')
    svg.push('M ' + loops[0][0] + ' ' + loops[1][0])

    for(var i = 1; i < loops[0].length; i++) {
      svg.push('L ' + loops[0][i] + ' ' + loops[1][i])
    }

    svg.push('" stroke-width="1" stroke="black" fill="none"></path>')
  })

  svg.push('</svg>')

  return svg
}

module.exports = quickdrawSvgRender
