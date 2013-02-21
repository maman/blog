require 'typogruby'
require 'hpricot'

module Toto
	module Template
		def markdown text
			if (options = @config[:markdown])
				Typogruby.improve(Markdown.new(text.to_s.strip, *(options.eql?(true) ? [] : options)).to_html)
			else
				text.strip
			end
		end
	end
	class Site
		alias_method :old_go, :go

		def go route, env = {}, type = :html
			if not route.first =~ /\d{4}/ and route.size == 2 and route.last =~
				@config[:id] = route.last.to_i
				route.pop
			end
			ret = old_go route, env, type
			@config.delete :id
			ret
		end
	end
	class Article < Hash
		include Template

		def link()  self[:link]	end

		def linktitle
			alias :link link
			doc = Hpricot(open(link))
			(doc/"title").inner_text
		end

		def dateUTC
			lambda {|now| now.strftime("%Y-%m-%d") }.call(self[:date])
		end

		def datetime
			lambda {|now| now.strftime("%B %d, %Y") }.call(self[:date])
		end
	end
end