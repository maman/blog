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
	class Article < Hash
		include Template

		def dateUTC
			lambda {|now| now.strftime("%Y-%m-%d") }.call(self[:date])
		end

		def datetime
			lambda {|now| now.strftime("%B %d, %Y") }.call(self[:date])
		end

		def summaryText
			Nokogiri::HTML(summary).text
		end
	end
end