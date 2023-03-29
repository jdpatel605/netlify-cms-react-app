---
title: This is test case study
category: News
titleslug: this-is-test-case-study
author: JD
date: 2023-03-29T10:19:27.190Z
thumbnail: /images/help-1.jpg
---
Very good point. The CMS uses https://github.com/netlify/netlify-cms/blob/2565668130f64dfc209f01128544f8573d8bbae8/packages/netlify-cms-core/src/lib/formatters.ts#L109
which you could import since we export each CMS package as a module.

I actually think it's better if you duplicate the logic as importing a module requires you to have a build step.
The parts that you'll need are prepareSlug and sanitizeSlug (the rest is used for string templating support)