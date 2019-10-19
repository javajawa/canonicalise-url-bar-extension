CHROME := chromium

DIR    := url-bar-canonicalise

build: $(DIR).crx

clean:
	rm -f $(DIR).crx

deepclean: clean
	rm -f $(DIR).pem

$(DIR).pem:
	$(CHROME) --pack-extension=$(DIR)
	rm -f $(DIR).crx

$(DIR).crx: $(DIR).pem $(wildcard $(DIR)/*)
	$(CHROME) --pack-extension=$(DIR) --pack-extension-key=$<
