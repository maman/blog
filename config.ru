
require 'toto'
require 'rack/no-www'
require 'rack-pjax'
require File.expand_path('../helper', __FILE__)

# Rack config
use Rack::Static, :urls => ['/css', '/js', '/img', '/font', '/favicon.ico'], :root => 'public'
use Rack::Pjax
use Rack::CommonLogger
use Rack::NoWWW

if ENV['RACK_ENV'] == 'development'
  use Rack::ShowExceptions
end

toto = Toto::Server.new do
  set :author,    "Achmad Mahardi"
  set :title,     "Achmad Mahardi: blog"
  set :root,      "index"
  #set :root,      "page"
  # set :date,      lambda {|now| now.strftime("%d/%m/%Y") }
  set :date,      lambda {|now| now.strftime("%B #{now.day.ordinal} %Y") }
  set :markdown,  :smart
  # set :disqus,    "personal-blahg"
  set :summary,   :max => 1000, :delim => /%/
  # set :ext,       'txt'                                   # file extension for articles
  # set :cache,      28800                                  # cache duration, in seconds
end

run toto
#run Improvingoutcomes::toto
