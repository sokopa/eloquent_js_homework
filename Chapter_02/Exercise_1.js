// Write a loop that makes seven calls to console.log to output the following triangle:

// #
// ##
// ###
// ####
// #####
// ######
// #######

for (let i = 0, line = '#'; i < 7; i++, line += '#') {
  console.log(line);
}
