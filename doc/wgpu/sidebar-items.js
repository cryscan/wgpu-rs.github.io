initSidebarItems({"constant":[["BIND_BUFFER_ALIGNMENT","Bound uniform/storage buffer offsets must be aligned to this number."],["COPY_BUFFER_ALIGNMENT","Buffer to buffer copy offsets and sizes must be aligned to this number."],["COPY_BYTES_PER_ROW_ALIGNMENT","Buffer-Texture copies must have [`bytes_per_row`] aligned to this number."]],"enum":[["AddressMode","How edges should be handled in texture addressing."],["Backend","Backends supported by wgpu."],["BindingResource","Resource that can be bound to a pipeline."],["BindingType","Specific type of a binding."],["BlendFactor","Alpha blend factor."],["BlendOperation","Alpha blend operation."],["CompareFunction","Comparison function used for depth and stencil operations."],["CullMode","Type of faces to be culled."],["DeviceType","Supported physical device types."],["FilterMode","Texel mixing mode when sampling between texels."],["FrontFace","Winding order which classifies the \"front\" face."],["IndexFormat","Format of indices used with pipeline."],["InputStepMode","Rate that determines when vertex data is advanced."],["LoadOp","Operation to perform to the output attachment at the start of a renderpass."],["Maintain","Passed to [`Device::poll`] to control if it should block or not. This has no effect on the web."],["MapMode","Type of buffer mapping."],["PowerPreference","Power Preference when choosing a physical adapter."],["PresentMode","Behavior of the presentation engine based on frame rate."],["PrimitiveTopology","Primitive type the input mesh is composed of."],["ShaderModuleSource","Source of a shader module."],["StencilOperation","Operation to perform on the stencil value."],["SwapChainError","Result of an unsuccessful call to [`SwapChain::get_next_frame`]."],["SwapChainStatus","Status of the recieved swapchain image."],["TextureAspect","Kind of data the texture holds."],["TextureComponentType","Type of data shaders will read from a texture."],["TextureDimension","Dimensionality of a texture."],["TextureFormat","Underlying texture data format."],["TextureViewDimension","Dimensions of a particular texture view."],["VertexFormat","Vertex Format for a Vertex Attribute (input)."]],"macro":[["include_spirv","Macro to load a SPIR-V module statically."],["vertex_attr_array","Macro to produce an array of [`VertexAttributeDescriptor`]."],["vertex_format_size","Helper macro which turns a vertex attribute type into a size."]],"mod":[["util","Utility structures and functions."]],"struct":[["Adapter","Handle to a physical graphics and/or compute device."],["AdapterInfo","Metadata about a backend adapter."],["BackendBit","Represents the backends that wgpu will use."],["BindGroup","Handle to a binding group."],["BindGroupDescriptor","Describes a group of bindings and the resources to be bound."],["BindGroupLayout","Handle to a binding group layout."],["BindGroupLayoutDescriptor","Describes a [`BindGroupLayout`]."],["BindGroupLayoutEntry","Describes a single binding inside a bind group."],["Binding","Bindable resource and the slot to bind it to."],["BlendDescriptor","Describes the blend state of a pipeline."],["Buffer","Handle to a GPU-accessible buffer."],["BufferAsyncError","Error occurred when trying to async map a number."],["BufferCopyView","View of a buffer which can be used to copy to/from a texture."],["BufferDescriptorBase","Describes a [`Buffer`]."],["BufferSlice","Slice into a [`Buffer`]."],["BufferUsage","Different ways that you can use a buffer."],["BufferView","Read only view into a mapped buffer."],["BufferViewMut","Write only view into mapped buffer."],["Color","RGBA double precision color."],["ColorStateDescriptor","Describes the color state of a render pipeline."],["ColorWrite","Color write mask. Disabled color channels will not be written to."],["CommandBuffer","Handle to a command buffer on the GPU."],["CommandBufferDescriptor","Describes a [`CommandBuffer`]."],["CommandEncoder","Encodes a series of GPU operations."],["CommandEncoderDescriptorBase","Describes a [`CommandEncoder`]."],["ComputePass","In-progress recording of a compute pass."],["ComputePipeline","Handle to a compute pipeline."],["ComputePipelineDescriptor","Describes a compute pipeline."],["DepthStencilStateDescriptor","Describes the depth/stencil state in a render pipeline."],["Device","Open connection to a graphics and/or compute device."],["DeviceDescriptor","Describes a [`Device`]."],["Extent3d","Extent of a texture related operation."],["Features","Features that are not guaranteed to be supported."],["Instance","Context for all other wgpu objects. Instance of wgpu."],["Limits","Represents the sets of limits an adapter/device supports."],["Operations","Pair of load and store operations for an attachment aspect."],["Origin3d","Origin of a copy to/from a texture."],["PipelineLayout","Handle to a pipeline layout."],["PipelineLayoutDescriptor","Describes a pipeline layout."],["ProgrammableStageDescriptor","Describes a programmable pipeline stage."],["Queue","Handle to a command queue on a device."],["RasterizationStateDescriptor","Describes the state of the rasterizer in a render pipeline."],["RenderBundle","Pre-prepared reusable bundle of GPU operations."],["RenderBundleDescriptorBase","Describes a [`RenderBundle`]."],["RenderBundleEncoder","Encodes a series of GPU operations into a reusable \"render bundle\"."],["RenderBundleEncoderDescriptor","Describes a [`RenderBundleEncoder`]."],["RenderPass","In-progress recording of a render pass."],["RenderPassColorAttachmentDescriptor","Describes a color attachment to a [`RenderPass`]."],["RenderPassDepthStencilAttachmentDescriptor","Describes a depth/stencil attachment to a [`RenderPass`]."],["RenderPassDescriptor","Describes the attachments of a [`RenderPass`]."],["RenderPipeline","Handle to a rendering (graphics) pipeline."],["RenderPipelineDescriptor","Describes a render (graphics) pipeline."],["RequestAdapterOptions","Options for requesting adapter."],["RequestDeviceError","Requesting a device failed."],["Sampler","Handle to a sampler."],["SamplerDescriptorBase","Describes a [`Sampler`]"],["ShaderModule","Handle to a compiled shader module."],["ShaderStage","Describes the shader stages that a binding will be visible from."],["StencilStateFaceDescriptor","Describes stencil state in a render pipeline."],["Surface","Handle to a presentable surface."],["SwapChain","Handle to a swap chain."],["SwapChainDescriptor","Describes a [`SwapChain`]."],["SwapChainFrame","Result of a successful call to [`SwapChain::get_next_frame`]."],["SwapChainTexture","Swap chain image that can be rendered to."],["Texture","Handle to a texture on the GPU."],["TextureCopyView","View of a texture which can be used to copy to/from a buffer/texture."],["TextureDataLayout","Layout of a texture in a buffer's memory."],["TextureDescriptorBase","Describes a [`Texture`]."],["TextureUsage","Different ways that you can use a texture."],["TextureView","Handle to a texture view."],["TextureViewDescriptorBase","Describes a [`TextureView`]."],["UnsafeFeatures","Marker type signalling if unsafe features are allowed to be enabled."],["VertexAttributeDescriptor","Vertex inputs (attributes) to shaders."],["VertexBufferDescriptor","Describes how the vertex buffer is interpreted."],["VertexStateDescriptor","Describes vertex input state for a render pipeline."]],"type":[["BufferAddress","Integral type used for buffer offsets."],["BufferDescriptor","Describes a [`Buffer`]."],["BufferSize","Integral type used for buffer slice sizes."],["CommandEncoderDescriptor","Describes a [`CommandEncoder`]."],["DynamicOffset","Integral type used for dynamic bind group offsets."],["RenderBundleDescriptor","Describes a [`RenderBundle`]."],["SamplerDescriptor","Describes a [`Sampler`]."],["ShaderLocation","Integral type used for binding locations in shaders."],["TextureDescriptor","Describes a [`Texture`]."],["TextureViewDescriptor","Describes a [`TextureView`]."]]});