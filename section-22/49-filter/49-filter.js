function validUserNames(names) {
    return names.filter(name => name.length < 10);
}

console.log(validUserNames(['mark', 'staceysmom1978', 'q2982128238983', 'MoanaFan']));