require 'toto'
require 'rack/no-www'
require 'rack-pjax'

# Rack config
use Rack::Static, :urls => ['/css', '/js', '/img', '/font', '/favicon.ico'], :root => 'public'
use Rack::Pjax
use Rack::CommonLogger
use Rack::NoWWW

if ENV['RACK_ENV'] == 'development'
  use Rack::ShowExceptions
end

toto = Toto::Server.new do
  set :author, "Achmad Mahardi"
  set :blogdescription, "Je suis badass"
  set :title, "Achmad Mahardi: blog"
  set :root, "index"
  set :date, lambda {|now| now.strftime("%B #{now.day.ordinal} %Y") }
  set :markdown, :smart
  set :summary, :max => 1000, :delim => /%/
  set :per_page , 5
end

run toto
#run Improvingoutcomes::toto
