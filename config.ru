
require 'toto'
require File.expand_path('../helper', __FILE__)

# Rack config
use Rack::Static, :urls => ['/css', '/js', '/img', '/font', '/favicon.ico'], :root => 'public'
use Rack::CommonLogger

if ENV['RACK_ENV'] == 'development'
  use Rack::ShowExceptions
end

toto = Toto::Server.new do
  set :author,    "Achmad Mahardi"
  set :title,     "Achmad Mahardi: blog"
  set :root,      "index"
  # set :date,      lambda {|now| now.strftime("%d/%m/%Y") }
  set :date,      lambda {|now| now.strftime("%B #{now.day.ordinal} %Y") }
  set :markdown,  :smart
  set :disqus,    false
  set :summary,   :max => 1000, :delim => /%/
  set :root,      "page"
  set :articles,  5
  # set :ext,       'txt'                                   # file extension for articles
  # set :cache,      28800                                  # cache duration, in seconds
end

run toto
#run Improvingoutcomes::toto
