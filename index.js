// Modules
const request = require('request')
const cheerio = require('cheerio')

// Isohunt base URL
let isohuntURL = 'https://isohunt.to'

module.exports = {
  search: function(keyword, cb) {
    let torrents = []
    var reqURL = isohuntURL + '/torrents/?ihq=' + keyword + '&Torrent_sort=-seeders'
    request(reqURL, function(err, res, body) {
      var $ = cheerio.load(body)
      $('table.table-torrents tr').each(function(index, el) {
        var torrent = {}
        torrent.name = $(this).find('td.title-row a span').text()
        torrent.size = $(this).find('td.size-row').text()
        torrent.seeders = $(this).find('td.sy').text()
        torrent.url = isohuntURL + $(this).find('td.title-row a').attr('href')
        if (torrent.name !== '') {
          torrents.push(torrent)
        }
      })
      return cb(null, torrents)
    })
  }
}
