meetingNotes.pdf: *.md
	@pandoc \
		--variable fontsize=11pt \
		--variable geometry:"top=1.5cm, bottom=2.5cm, left=2.5cm, right=1.5cm" \
		--variable geometry:a4paper \
		--table-of-contents \
		--number-sections \
		*.md -o meetingNotes.pdf

clean:
	@$(RM) -f meetingNotes.pdf