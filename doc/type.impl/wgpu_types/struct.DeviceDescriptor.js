(function() {var type_impls = {
"wgpu":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-DeviceDescriptor%3CL%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/wgpu_types/lib.rs.html#1648\">source</a><a href=\"#impl-DeviceDescriptor%3CL%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;L&gt; <a class=\"struct\" href=\"wgpu_types/struct.DeviceDescriptor.html\" title=\"struct wgpu_types::DeviceDescriptor\">DeviceDescriptor</a>&lt;L&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.map_label\" class=\"method\"><a class=\"src rightside\" href=\"src/wgpu_types/lib.rs.html#1650\">source</a><h4 class=\"code-header\">pub fn <a href=\"wgpu_types/struct.DeviceDescriptor.html#tymethod.map_label\" class=\"fn\">map_label</a>&lt;K&gt;(&amp;self, fun: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;L</a>) -&gt; K) -&gt; <a class=\"struct\" href=\"wgpu_types/struct.DeviceDescriptor.html\" title=\"struct wgpu_types::DeviceDescriptor\">DeviceDescriptor</a>&lt;K&gt;</h4></section></summary><div class=\"docblock\"><p>Takes a closure and maps the label of the device descriptor into another.</p>\n</div></details></div></details>",0,"wgpu::DeviceDescriptor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Serialize-for-DeviceDescriptor%3CL%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/wgpu_types/lib.rs.html#1635\">source</a><a href=\"#impl-Serialize-for-DeviceDescriptor%3CL%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;L&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"wgpu_types/struct.DeviceDescriptor.html\" title=\"struct wgpu_types::DeviceDescriptor\">DeviceDescriptor</a>&lt;L&gt;<span class=\"where fmt-newline\">where\n    L: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/wgpu_types/lib.rs.html#1635\">source</a><a href=\"#method.serialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.193/serde/ser/trait.Serialize.html#tymethod.serialize\" class=\"fn\">serialize</a>&lt;__S&gt;(\n    &amp;self,\n    __serializer: __S\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&lt;__S as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.193/serde/ser/trait.Serializer.html#associatedtype.Ok\" title=\"type serde::ser::Serializer::Ok\">Ok</a>, &lt;__S as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.193/serde/ser/trait.Serializer.html#associatedtype.Error\" title=\"type serde::ser::Serializer::Error\">Error</a>&gt;<span class=\"where fmt-newline\">where\n    __S: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>,</span></h4></section></summary><div class='docblock'>Serialize this value into the given Serde serializer. <a href=\"https://docs.rs/serde/1.0.193/serde/ser/trait.Serialize.html#tymethod.serialize\">Read more</a></div></details></div></details>","Serialize","wgpu::DeviceDescriptor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-DeviceDescriptor%3CL%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/wgpu_types/lib.rs.html#1634\">source</a><a href=\"#impl-Clone-for-DeviceDescriptor%3CL%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;L&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"wgpu_types/struct.DeviceDescriptor.html\" title=\"struct wgpu_types::DeviceDescriptor\">DeviceDescriptor</a>&lt;L&gt;<span class=\"where fmt-newline\">where\n    L: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/wgpu_types/lib.rs.html#1634\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"wgpu_types/struct.DeviceDescriptor.html\" title=\"struct wgpu_types::DeviceDescriptor\">DeviceDescriptor</a>&lt;L&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","wgpu::DeviceDescriptor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deserialize%3C'de%3E-for-DeviceDescriptor%3CL%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/wgpu_types/lib.rs.html#1636\">source</a><a href=\"#impl-Deserialize%3C'de%3E-for-DeviceDescriptor%3CL%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'de, L&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"wgpu_types/struct.DeviceDescriptor.html\" title=\"struct wgpu_types::DeviceDescriptor\">DeviceDescriptor</a>&lt;L&gt;<span class=\"where fmt-newline\">where\n    L: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt;,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.deserialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/wgpu_types/lib.rs.html#1636\">source</a><a href=\"#method.deserialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.193/serde/de/trait.Deserialize.html#tymethod.deserialize\" class=\"fn\">deserialize</a>&lt;__D&gt;(\n    __deserializer: __D\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"wgpu_types/struct.DeviceDescriptor.html\" title=\"struct wgpu_types::DeviceDescriptor\">DeviceDescriptor</a>&lt;L&gt;, &lt;__D as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.193/serde/de/trait.Deserializer.html#associatedtype.Error\" title=\"type serde::de::Deserializer::Error\">Error</a>&gt;<span class=\"where fmt-newline\">where\n    __D: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;,</span></h4></section></summary><div class='docblock'>Deserialize this value from the given Serde deserializer. <a href=\"https://docs.rs/serde/1.0.193/serde/de/trait.Deserialize.html#tymethod.deserialize\">Read more</a></div></details></div></details>","Deserialize<'de>","wgpu::DeviceDescriptor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-DeviceDescriptor%3CL%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/wgpu_types/lib.rs.html#1634\">source</a><a href=\"#impl-Default-for-DeviceDescriptor%3CL%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;L&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"wgpu_types/struct.DeviceDescriptor.html\" title=\"struct wgpu_types::DeviceDescriptor\">DeviceDescriptor</a>&lt;L&gt;<span class=\"where fmt-newline\">where\n    L: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/wgpu_types/lib.rs.html#1634\">source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; <a class=\"struct\" href=\"wgpu_types/struct.DeviceDescriptor.html\" title=\"struct wgpu_types::DeviceDescriptor\">DeviceDescriptor</a>&lt;L&gt;</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","wgpu::DeviceDescriptor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-DeviceDescriptor%3CL%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/wgpu_types/lib.rs.html#1634\">source</a><a href=\"#impl-Debug-for-DeviceDescriptor%3CL%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;L&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"wgpu_types/struct.DeviceDescriptor.html\" title=\"struct wgpu_types::DeviceDescriptor\">DeviceDescriptor</a>&lt;L&gt;<span class=\"where fmt-newline\">where\n    L: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/wgpu_types/lib.rs.html#1634\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","wgpu::DeviceDescriptor"]],
"wgpu_core":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-DeviceDescriptor%3CL%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/wgpu_types/lib.rs.html#1648\">source</a><a href=\"#impl-DeviceDescriptor%3CL%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;L&gt; <a class=\"struct\" href=\"wgpu_types/struct.DeviceDescriptor.html\" title=\"struct wgpu_types::DeviceDescriptor\">DeviceDescriptor</a>&lt;L&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.map_label\" class=\"method\"><a class=\"src rightside\" href=\"src/wgpu_types/lib.rs.html#1650\">source</a><h4 class=\"code-header\">pub fn <a href=\"wgpu_types/struct.DeviceDescriptor.html#tymethod.map_label\" class=\"fn\">map_label</a>&lt;K&gt;(&amp;self, fun: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;L</a>) -&gt; K) -&gt; <a class=\"struct\" href=\"wgpu_types/struct.DeviceDescriptor.html\" title=\"struct wgpu_types::DeviceDescriptor\">DeviceDescriptor</a>&lt;K&gt;</h4></section></summary><div class=\"docblock\"><p>Takes a closure and maps the label of the device descriptor into another.</p>\n</div></details></div></details>",0,"wgpu_core::device::DeviceDescriptor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Serialize-for-DeviceDescriptor%3CL%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/wgpu_types/lib.rs.html#1635\">source</a><a href=\"#impl-Serialize-for-DeviceDescriptor%3CL%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;L&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"wgpu_types/struct.DeviceDescriptor.html\" title=\"struct wgpu_types::DeviceDescriptor\">DeviceDescriptor</a>&lt;L&gt;<span class=\"where fmt-newline\">where\n    L: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/wgpu_types/lib.rs.html#1635\">source</a><a href=\"#method.serialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.193/serde/ser/trait.Serialize.html#tymethod.serialize\" class=\"fn\">serialize</a>&lt;__S&gt;(\n    &amp;self,\n    __serializer: __S\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&lt;__S as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.193/serde/ser/trait.Serializer.html#associatedtype.Ok\" title=\"type serde::ser::Serializer::Ok\">Ok</a>, &lt;__S as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.193/serde/ser/trait.Serializer.html#associatedtype.Error\" title=\"type serde::ser::Serializer::Error\">Error</a>&gt;<span class=\"where fmt-newline\">where\n    __S: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>,</span></h4></section></summary><div class='docblock'>Serialize this value into the given Serde serializer. <a href=\"https://docs.rs/serde/1.0.193/serde/ser/trait.Serialize.html#tymethod.serialize\">Read more</a></div></details></div></details>","Serialize","wgpu_core::device::DeviceDescriptor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-DeviceDescriptor%3CL%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/wgpu_types/lib.rs.html#1634\">source</a><a href=\"#impl-Clone-for-DeviceDescriptor%3CL%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;L&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"wgpu_types/struct.DeviceDescriptor.html\" title=\"struct wgpu_types::DeviceDescriptor\">DeviceDescriptor</a>&lt;L&gt;<span class=\"where fmt-newline\">where\n    L: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/wgpu_types/lib.rs.html#1634\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"wgpu_types/struct.DeviceDescriptor.html\" title=\"struct wgpu_types::DeviceDescriptor\">DeviceDescriptor</a>&lt;L&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","wgpu_core::device::DeviceDescriptor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deserialize%3C'de%3E-for-DeviceDescriptor%3CL%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/wgpu_types/lib.rs.html#1636\">source</a><a href=\"#impl-Deserialize%3C'de%3E-for-DeviceDescriptor%3CL%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'de, L&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"wgpu_types/struct.DeviceDescriptor.html\" title=\"struct wgpu_types::DeviceDescriptor\">DeviceDescriptor</a>&lt;L&gt;<span class=\"where fmt-newline\">where\n    L: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt;,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.deserialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/wgpu_types/lib.rs.html#1636\">source</a><a href=\"#method.deserialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.193/serde/de/trait.Deserialize.html#tymethod.deserialize\" class=\"fn\">deserialize</a>&lt;__D&gt;(\n    __deserializer: __D\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"wgpu_types/struct.DeviceDescriptor.html\" title=\"struct wgpu_types::DeviceDescriptor\">DeviceDescriptor</a>&lt;L&gt;, &lt;__D as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.193/serde/de/trait.Deserializer.html#associatedtype.Error\" title=\"type serde::de::Deserializer::Error\">Error</a>&gt;<span class=\"where fmt-newline\">where\n    __D: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;,</span></h4></section></summary><div class='docblock'>Deserialize this value from the given Serde deserializer. <a href=\"https://docs.rs/serde/1.0.193/serde/de/trait.Deserialize.html#tymethod.deserialize\">Read more</a></div></details></div></details>","Deserialize<'de>","wgpu_core::device::DeviceDescriptor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-DeviceDescriptor%3CL%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/wgpu_types/lib.rs.html#1634\">source</a><a href=\"#impl-Default-for-DeviceDescriptor%3CL%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;L&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"wgpu_types/struct.DeviceDescriptor.html\" title=\"struct wgpu_types::DeviceDescriptor\">DeviceDescriptor</a>&lt;L&gt;<span class=\"where fmt-newline\">where\n    L: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/wgpu_types/lib.rs.html#1634\">source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; <a class=\"struct\" href=\"wgpu_types/struct.DeviceDescriptor.html\" title=\"struct wgpu_types::DeviceDescriptor\">DeviceDescriptor</a>&lt;L&gt;</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","wgpu_core::device::DeviceDescriptor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-DeviceDescriptor%3CL%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/wgpu_types/lib.rs.html#1634\">source</a><a href=\"#impl-Debug-for-DeviceDescriptor%3CL%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;L&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"wgpu_types/struct.DeviceDescriptor.html\" title=\"struct wgpu_types::DeviceDescriptor\">DeviceDescriptor</a>&lt;L&gt;<span class=\"where fmt-newline\">where\n    L: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/wgpu_types/lib.rs.html#1634\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","wgpu_core::device::DeviceDescriptor"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()